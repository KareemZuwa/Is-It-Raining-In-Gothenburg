import { useFiveDaysForecast } from "../queries/FiveDaysForecastQueries";
import { WeatherIcon } from "./WeatherIcon";
import {
  getMonthString,
  getNumericDayString,
  getWeekDayString,
} from "../utils/dateUtils";

export const WeatherCard = () => {
  const { data } = useFiveDaysForecast();
  const fourDaysForeCast = data?.DailyForecasts.slice(1);

  return (
    <article className="xxs:flex flex-wrap justify-between -mx-4">
      {fourDaysForeCast == null ? (
        <div>no data</div>
      ) : (
        fourDaysForeCast.map((fourDays) => (
          <div
            key={fourDays.Date}
            className="relative min-w-[193px] h-[289px] shadow-2xl rounded-xl mb-8 mx-4"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-white opacity-70 rounded-xl"></div>
            <div className="relative h-full p-8 flex flex-col text-center text-white">
              <section>
                <h2 className="text-lg font-semibold">
                  {getWeekDayString(new Date(fourDays.Date))}
                </h2>
                <p className="text-xs">
                  {getNumericDayString(new Date(fourDays.Date))}{" "}
                  {getMonthString(new Date(fourDays.Date))}
                </p>
              </section>
              <section className="mt-4 flex self-center">
                <WeatherIcon iconNumber={fourDays.Day.Icon} iconSize={"lg"} />
              </section>
              <section className="mt-2.5 text-[2rem] font-semibold">
                {Math.ceil(fourDays.Temperature.Maximum.Value)}º
              </section>
            </div>
          </div>
        ))
      )}
    </article>
  );
};
