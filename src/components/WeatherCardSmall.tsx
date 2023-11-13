import { useFiveDaysForecast } from "../queries/FiveDaysForecastQueries";
import { WeatherIcon } from "./WeatherIcon";
import {
  getMonthString,
  getNumericDayString,
  getWeekDayString,
} from "../utils/dateUtils";

import { SkeletonText } from "../utils/SkeletonTextLoader";

export const WeatherCardSmall = () => {
  const { data, isLoading } = useFiveDaysForecast();
  const fourDaysForeCast = data?.DailyForecasts.slice(1);

  return (
    <article className="xxs:hidden flex flex-wrap justify-between">
      <div className="inline-block min-w-full align-middle relative shadow-2xl rounded-xl">
        {fourDaysForeCast === undefined ? (
          <div className="mt-16 text-center">
            <h1>No Weather Data for the upcoming four days were found</h1>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-gray-300 opacity-70 rounded-xl"></div>
            <table className="relative min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-white">
                {isLoading ? (
                  <>
                    <tr>
                      <td className="pl-4 py-4 font-medium pr-4">
                        <SkeletonText fontSize={"lg"} width={"w-full"} />
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-4 py-4 font-medium pr-4">
                        <SkeletonText fontSize={"lg"} width={"w-full"} />
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-4 py-4 font-medium pr-4">
                        <SkeletonText fontSize={"lg"} width={"w-full"} />
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-4 py-4 font-medium pr-4">
                        <SkeletonText fontSize={"lg"} width={"w-full"} />
                      </td>
                    </tr>
                  </>
                ) : (
                  fourDaysForeCast.map((fourDays) => (
                    <tr key={fourDays.Date}>
                      <td className="pl-4 py-2 font-medium">
                        {getWeekDayString(new Date(fourDays.Date))}
                      </td>
                      <td className="px-3 py-2 text-xs font-light">
                        {getNumericDayString(new Date(fourDays.Date))}{" "}
                        {getMonthString(new Date(fourDays.Date)).slice(0, 3)}
                      </td>
                      <td className="px-3 py-2 text-2xl font-semibold">
                        {Math.ceil(fourDays.Temperature.Maximum.Value)}º
                      </td>
                      <td className="pb-3 py-2 pr-1">
                        <WeatherIcon
                          iconNumber={fourDays.Day.Icon}
                          iconSize={"sm"}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </article>
  );
};
