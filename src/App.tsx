import { useEffect, useMemo, useState } from "react";
import { useSunsetSunriseQuery } from "./queries/SunsetSunriseQueries";

function isDaytime(sunriseTime: Date, sunsetTime: Date): boolean {
  const now = new Date();
  return now >= sunriseTime && now < sunsetTime;
}

const App = () => {
  const { data } = useSunsetSunriseQuery();
  console.log(data?.DailyForecasts[0].Sun);
  const sunrise = data?.DailyForecasts[0].Sun.Rise;
  const sunset = data?.DailyForecasts[0].Sun.Set;
  console.log(sunrise, sunset);

  const [isDay, setIsDay] = useState(true); // Assuming it's daytime initially

  const sunriseTime = useMemo(
    () => (sunrise ? new Date(sunrise) : new Date()),
    [sunrise]
  );
  const sunsetTime = useMemo(
    () => (sunset ? new Date(sunset) : new Date()),
    [sunset]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const daytime: boolean = isDaytime(sunriseTime, sunsetTime);
      setIsDay(daytime);
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, [sunriseTime, sunsetTime]);

  return (
    <>
      <div
        className={`min-h-screen min-w-screen flex flex-col transition-colors duration-1000 ease-in-out bg-gradient-to-b ${
          isDay ? "from-sky-600 to-cyan-200" : "from-sky-950 to-sky-600"
        }`}
      >
        <header className="font-poppins">Header</header>
        <main>Main</main>
      </div>
    </>
  );
};

export default App;
