import { useOneDayForecastQuery } from "../queries/OneDayForecastQueries";
import { WeatherIcon } from "./WeatherIcon";
import {
  getMonthString,
  getNumericDayString,
  getWeekDayString,
} from "../utils/dateUtils";
import { SkeletonText } from "../utils/SkeletonTextLoader";
import { SkeletonImageLoader } from "../utils/SkeletonImageLoader";

export const WeatherTodayCardSmall = () => {
  const { data, isLoading } = useOneDayForecastQuery();

  const weatherDate: Date | string =
    data?.DailyForecasts[0]?.Date == null
      ? " "
      : new Date(data.DailyForecasts[0].Date);

  const weekDay: string = getWeekDayString(weatherDate);
  const month: string = getMonthString(weatherDate);
  const day: string = getNumericDayString(weatherDate);
  const weatherDayIcon = data?.DailyForecasts[0].Day.Icon;
  const maxTemprature = data?.DailyForecasts[0].Temperature.Maximum.Value;
  return (
    <div className="relative text-center xxxs:hidden py-8 shadow-2xl">
      <section>
        <article>
          {weatherDate === undefined ? (
            <div>
              <h2 className="text-[2rem] font-semibold">No data</h2>
              <p className="text-base">No Data</p>
            </div>
          ) : isLoading ? (
            <div className="px-16">
              <SkeletonText fontSize={"3xl"} width={"w-full"} />
              <SkeletonText fontSize={"base"} width={"w-full"} />
            </div>
          ) : (
            <div>
              <h2 className="text-[2rem] font-semibold">{weekDay}</h2>
              <p className="text-base">
                {day} {month}
              </p>
            </div>
          )}
        </article>
        <article className="mt-4 flex flex-col items-center">
          {weatherDayIcon === undefined ? (
            <WeatherIcon iconNumber={7} iconSize={"xl"} />
          ) : isLoading ? (
            <div className="my-1">
              <SkeletonImageLoader size={"xl"} />
            </div>
          ) : (
            <WeatherIcon iconNumber={weatherDayIcon} iconSize={"xl"} />
          )}
        </article>
        <article className="mt-4 flex flex-col items-center">
          {maxTemprature === undefined ? (
            <div className="flex justify-between">
              <h1 className="text-[3rem] font-semibold">No data</h1>
            </div>
          ) : isLoading ? (
            <div className="flex justify-between mb-2">
              <SkeletonText fontSize={"5xl"} width={"w-16"} />
            </div>
          ) : (
            <div className="flex justify-between">
              <h1 className="text-[3rem] font-semibold">
                {Math.ceil(maxTemprature)}º
              </h1>
            </div>
          )}
        </article>
      </section>
    </div>
  );
};
