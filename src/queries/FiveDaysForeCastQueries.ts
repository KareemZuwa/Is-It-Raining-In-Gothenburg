import { useQuery } from "@tanstack/react-query";
import { FiveDaysForecasts } from "../interfaces/fiveDaysForecastsTypes";

export const useFiveDaysForecast = () => {
  return useQuery<
    FiveDaysForecasts,
    Error,
    FiveDaysForecasts,
    ["fiveDaysForecastData"]
  >({
    queryKey: ["fiveDaysForecastData"],
    queryFn: async () => {
      const apiKey: string = import.meta.env.VITE_API_KEY as string;

      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/315909?apikey=${apiKey}&details=false&metric=true`
      );

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return (await response.json()) as FiveDaysForecasts;
    },
  });
};
