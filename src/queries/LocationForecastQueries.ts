import { useQuery } from "@tanstack/react-query";
import { EnvironmentVariables } from "../interfaces/fiveDaysForecastsTypes";
import { Location } from "../interfaces/locationTypes";

export const useLocation = () => {
  return useQuery<Location, Error, Location, ["locationData"]>({
    queryKey: ["locationData"],
    queryFn: async () => {
      const apiKey: EnvironmentVariables = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/315909?apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return (await response.json()) as Location;
    },
  });
};
