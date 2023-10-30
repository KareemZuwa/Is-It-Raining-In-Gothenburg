import { useQuery } from "@tanstack/react-query";
import { EnvironmentVariables } from "../interfaces/fiveDaysForecastsTypes";
import { HourlyForecast } from "../interfaces/hourlyForecastTypes";

export const useHourlyForecast = () => {
  return useQuery<
    HourlyForecast[],
    Error,
    HourlyForecast[],
    ["hourlyForecastData"]
  >({
    queryKey: ["hourlyForecastData"],
    queryFn: async () => {
      const apiKey: EnvironmentVariables = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/315909?apikey=${apiKey}&metric=true`
      );

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return (await response.json()) as HourlyForecast[];
    },
  });
};
