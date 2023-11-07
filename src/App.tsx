import { useEffect, useState } from "react";
import { useOneDayForecastQuery } from "./queries/OneDayForecastQueries";
import { CloudsBackground } from "./components/CloudsBackground";
import { Header } from "./components/Header";
import { WeatherOverview } from "./components/WeatherOverview";
import { isDaytime } from "./utils/DaytimeChecker";

const App = () => {
  const { data, refetch } = useOneDayForecastQuery();

  const sunrise = data?.DailyForecasts[0]?.Sun?.Rise;
  const sunset = data?.DailyForecasts[0]?.Sun?.Set;
  console.log(sunrise, sunset);

  const [isDay, setIsDay] = useState<boolean>(true);

  useEffect(() => {
    const checkDaytime = async () => {
      const newIsDay = isDaytime(sunrise, sunset);
      if (newIsDay !== isDay) {
        setIsDay(newIsDay);
        await refetch(); // Trigger a refetch when the day changes
      }
    };

    // Set up an interval to periodically check for changes in day/night
    const intervalId = setInterval(checkDaytime, 1000); // Check every minute (adjust the interval as needed)

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [sunrise, sunset, isDay, refetch]);
  console.log(isDay);

  return (
    <>
      <div
        className={`fixed inset-0 overflow-y-auto h-screen min-w-screen flex flex-col transition duration-[5000ms] ease-in-out bg-gradient-to-b ${
          isDay ? "from-sky-600 to-cyan-200" : "from-sky-950 to-sky-600"
        }`}
      >
        <CloudsBackground isDay={isDay} />
        
        

        <div className="px-[50px] xl:px-[100px] absolute inset-0 w-full h-full z-30">
          <div className="container m-auto max-w-screen-xl">
            <Header />
            <WeatherOverview />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
