import { useFiveDaysForecast } from "../queries/FiveDaysForecastQueries";
import { WeatherIcon } from "./WeatherIcon";
import {
  getMonthString,
  getNumericDayString,
  getWeekDayString,
} from "../utils/dateUtils";

export const WeatherCardSmall = () => {
  const { data } = useFiveDaysForecast();
  const fourDaysForeCast = data?.DailyForecasts.slice(1);
  console.log(fourDaysForeCast);

  return (
    <article className="xxs:hidden flex flex-wrap justify-between">
      <div className="inline-block min-w-full align-middle relative shadow-2xl rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-gray-300 opacity-70 rounded-xl"></div>
        <table className="relative min-w-full divide-y divide-gray-300">
          <tbody className="divide-y divide-white">
            {fourDaysForeCast == null ? (
              <div>No data</div>
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
                  <td className="pb-3 py-2 pr-1 text-sm">
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
      </div>
    </article>
  );
};
