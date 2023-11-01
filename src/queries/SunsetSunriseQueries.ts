import { useQuery } from "@tanstack/react-query";
import { OneDayForecast } from "../interfaces/todaysForecastTypes";

export const useSunsetSunriseQuery = () => {
  return useQuery<
    OneDayForecast,
    Error,
    OneDayForecast,
    ["todaysForecastData"]
  >({
    queryKey: ["todaysForecastData"],
    queryFn: async () => {
      const apiKey: string = import.meta.env.VITE_API_KEY as string;

      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/315909?apikey=${apiKey}&details=true&metric=true`
      );

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return (await response.json()) as OneDayForecast;
    },
    refetchOnWindowFocus: true,
  });
};
