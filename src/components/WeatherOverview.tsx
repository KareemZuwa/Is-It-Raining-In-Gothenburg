import { WeatherTodayCard } from "./WeatherTodayCard";

export const WeatherOverview = () => {
  return (
    <main className="text-white flex flex-col justify-between">
      <section className="lg:grid grid-cols-2">
        <WeatherTodayCard />
      </section>
      <section className="mt-24 flex justify-between">
        <div className="w-[193px] h-[289px] bg-gradient-to-b from-cyan-200 to-white rounded-[10px] opacity-70 shadow-md flex items-center justify-center">Weather Cards</div>
        <div className="w-[193px] h-[289px] bg-gradient-to-b from-cyan-200 to-white rounded-[10px] opacity-70 shadow-md flex items-center justify-center">Weather Cards</div>
        <div className="w-[193px] h-[289px] bg-gradient-to-b from-cyan-200 to-white rounded-[10px] opacity-70 shadow-md flex items-center justify-center">Weather Cards</div>
        <div className="w-[193px] h-[289px] bg-gradient-to-b from-cyan-200 to-white rounded-[10px] opacity-70 shadow-md flex items-center justify-center">Weather Cards</div>
      </section>
    </main>
  );
};
