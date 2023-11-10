import { WeatherIcon } from "./WeatherIcon";

export const WeatherCard = () => {
  return (
    <article className="relative min-w-[193px] h-[289px] shadow-2xl rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-white opacity-70 rounded-xl"></div>
      <div className="relative h-full p-8 flex flex-col text-center text-white">
        <section>
          <h2 className="text-lg font-semibold">Saturday</h2>
          <p className="text-xs">11 November</p>
        </section>
        <section className="mt-4 flex self-center">
          <WeatherIcon iconNumber={12} iconSize={"lg"} />
        </section>
        <section className="mt-2.5 text-[2rem] font-semibold">5º</section>
      </div>
    </article>
  );
};
