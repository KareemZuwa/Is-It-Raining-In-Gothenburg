import { useQuery } from "@tanstack/react-query";
import { HourlyForecast } from "../interfaces/hourlyForecastTypes";

export const useHourlyForecastQuery = () => {
  return useQuery<
    HourlyForecast[],
    Error,
    HourlyForecast[],
    ["hourlyForecastData"]
  >({
    queryKey: ["hourlyForecastData"],
    queryFn: async () => {
      const apiKey: string = import.meta.env.VITE_API_KEY as string;

      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/315909?apikey=${apiKey}&metric=true`
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not OK. Status: ${response.status}`
        );
      }

      return (await response.json()) as HourlyForecast[];
    },
  });
};
