import { useQuery } from "@tanstack/react-query";
import { Location } from "../interfaces/locationTypes";

export const useLocationQuery = () => {
  return useQuery<Location, Error, Location, ["locationData"]>({
    queryKey: ["locationData"],
    queryFn: async () => {
      const apiKey: string = import.meta.env.VITE_API_KEY as string;

      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/315909?apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not OK. Status: ${response.status}`
        );
      }

      return (await response.json()) as Location;
    },
  });
};
