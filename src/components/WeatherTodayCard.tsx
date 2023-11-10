import { useOneDayForecastQuery } from "../queries/OneDayForecastQueries";
import {
  getMonthString,
  getNumericDayString,
  getWeekDayString,
} from "../utils/dateUtils";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherTodayCardSmall } from "./WeatherTodayCardSmall";

export const WeatherTodayCard = () => {
  const { data } = useOneDayForecastQuery();

  const weatherDate: Date | string =
    data?.DailyForecasts[0]?.Date == null
      ? " "
      : new Date(data.DailyForecasts[0].Date);

  const weekDay: string = getWeekDayString(weatherDate);
  const month: string = getMonthString(weatherDate);
  const day: string = getNumericDayString(weatherDate);

  const maxTemprature = data?.DailyForecasts[0].Temperature.Maximum.Value;
  const minTemprature = data?.DailyForecasts[0].Temperature.Minimum.Value;
  const rainProbability = data?.DailyForecasts[0].Day.RainProbability;
  const windSpeed = data?.DailyForecasts[0].Day.Wind.Speed.Value;
  const weatherDayIcon = data?.DailyForecasts[0].Day.Icon;
  const weatherDayIconPhrase = data?.DailyForecasts[0].Day.IconPhrase;
  const weatherNightIcon = data?.DailyForecasts[0].Night.Icon;

  return (
    <article className="mt-7 sm:mt-24 lg:mr-4 rounded-xl xxxs:h-[289px] md:min-w-[38.25rem] shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-white opacity-70 rounded-xl"></div>
      <div className="relative h-full p-8 hidden xxxs:grid grid-cols-2 xs:grid-cols-3">
        <section className="flex flex-col justify-between">
          <article>
            {weatherDate == null ? (
              <div>
                <h1 className="rounded mb-4 h-8 w-full animate-pulse bg-white"></h1>
                <h2 className="rounded h-4 w-full animate-pulse bg-white"></h2>
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-semibold">{weekDay}</h1>
                <h2 className="text-base">
                  {day} {month}
                </h2>
              </div>
            )}
          </article>
          <article className="xxxs:w-36 xs:w-3/4">
            {maxTemprature == null ? (
              <div className="rounded mb-4 h-8 w-full animate-pulse bg-white"></div>
            ) : (
              <div className="flex justify-between">
                <h1 className="text-[2rem] font-semibold">Max:</h1>
                <h1 className="text-[2rem] font-semibold">
                  {Math.ceil(maxTemprature)}º
                </h1>
              </div>
            )}
            {minTemprature == null ? (
              <div className="rounded mt-2 h-8 w-full animate-pulse bg-white"></div>
            ) : (
              <div className="flex justify-between">
                <h1 className="text-[2rem] font-semibold">Min:</h1>
                <h1 className="text-[2rem] font-semibold">
                  {Math.ceil(minTemprature)}º
                </h1>
              </div>
            )}
          </article>
        </section>

        <section className="hidden xs:flex flex-col items-center text-center justify-around">
          <article>
            <h2 className="font-semibold">Chance of rain</h2>
            {rainProbability == null ? (
              <div className="rounded mb-4 h-4 w-full animate-pulse bg-white"></div>
            ) : (
              <h1 className="text-xl">{rainProbability}%</h1>
            )}
          </article>
          <article>
            <h2 className="font-semibold">Wind</h2>
            {windSpeed == null ? (
              <div className="rounded mb-4 h-4 w-16 animate-pulse bg-white"></div>
            ) : (
              <h1 className="text-xl">{windSpeed} km/h</h1>
            )}
          </article>
        </section>

        <section className="flex flex-col justify-between items-end">
          <article className="-mt-6">
            {weatherDayIcon == null ? (
              <WeatherIcon iconNumber={7} iconSize={"xl"} />
            ) : (
              <WeatherIcon iconNumber={weatherDayIcon} iconSize={"xl"} />
            )}

            {weatherDayIconPhrase == null ? (
              <p className="flex justify-center rounded mb-4 h-4 text-center w-16 animate-pulse bg-white"></p>
            ) : (
              <p className="flex text-xs justify-center">{`"${weatherDayIconPhrase}"`}</p>
            )}
          </article>
          <article className="space-x-4 hidden xxxs:flex items-center self-end mr-6 justify-between">
            <h1 className="font-semibold pt-4">Night:</h1>
            {weatherNightIcon == null ? (
              <WeatherIcon iconNumber={7} iconSize={"sm"} />
            ) : (
              <WeatherIcon iconNumber={weatherNightIcon} iconSize={"sm"} />
            )}
          </article>
        </section>
      </div>
      <WeatherTodayCardSmall
        weekDay={weekDay}
        day={day}
        month={month}
        weatherDayIcon={weatherDayIcon}
        weatherDayIconPhrase={weatherDayIconPhrase}
        maxTemprature={maxTemprature}
      />
    </article>
  );
};
