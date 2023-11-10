import { WeatherCard } from "./WeatherCard";
import { WeatherTodayCard } from "./WeatherTodayCard";

export const WeatherOverview = () => {
  return (
    <main className="text-white flex flex-col justify-between">
      <section className="lg:grid grid-cols-2">
        <WeatherTodayCard />
      </section>
      <section className="mt-24">
        <WeatherCard />
      </section>
    </main>
  );
};
