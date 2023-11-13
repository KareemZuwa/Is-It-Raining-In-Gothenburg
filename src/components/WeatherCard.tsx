import { useFiveDaysForecastQuery } from "../queries/FiveDaysForecastQueries";
import { WeatherIcon } from "./WeatherIcon";
import {
  getMonthString,
  getNumericDayString,
  getWeekDayString,
} from "../utils/dateUtils";
// import { SkeletonText } from "../utils/SkeletonLoaders";
// import { SkeletonImageLoader } from "../utils/SkeletonImageLoader";
import { SkeletonCard } from "../utils/SkeletonCard";

export const WeatherCard = () => {
  const { data, isLoading } = useFiveDaysForecastQuery();
  const fourDaysForeCast = data?.DailyForecasts.slice(1);

  return (
    <article className="hidden xxs:flex flex-wrap justify-between -mx-4">
      {fourDaysForeCast === undefined ? (
        <div className="w-full flex flex-col items-center justify-center space-y-8">
          <h1 className="text-xl">
            No Weather Data for the upcoming four days were found
          </h1>
        </div>
      ) : isLoading ? (
        <div className="w-full flex justify-between flex-wrap">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
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
