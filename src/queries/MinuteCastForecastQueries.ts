import { useQuery } from "@tanstack/react-query";
import { MinuteCastForecast } from "../interfaces/hourlyForecastTypes";

export const useMinuteCastForecastQuery = () => {
  return useQuery<
    MinuteCastForecast,
    Error,
    MinuteCastForecast,
    ["minuteCastForecastData"]
  >({
    queryKey: ["minuteCastForecastData"],
    queryFn: async () => {
      const apiKey: string = import.meta.env.VITE_MINUTE_API_KEY as string;

      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/minute?q=57.706%2C11.963&apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not OK. Status: ${response.status}`
        );
      }

      return (await response.json()) as MinuteCastForecast;
    },
  });
};
