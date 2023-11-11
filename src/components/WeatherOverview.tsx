import { WeatherCard } from "./WeatherCard";
import { WeatherCardSmall } from "./WeatherCardSmall";
import { WeatherTodayCard } from "./WeatherTodayCard";

export const WeatherOverview = () => {
  return (
    <main className="text-white flex flex-col justify-between h-full">
      <section className="lg:grid grid-cols-2">
        <WeatherTodayCard />
      </section>
      <section className="mt-8 xxxs:mt-24">
        <WeatherCard />
        <WeatherCardSmall />
      </section>
    </main>
  );
};
