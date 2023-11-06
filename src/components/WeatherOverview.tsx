export const WeatherOverview = () => {
  return (
    <main className="text-white flex flex-col justify-between">
      <section className="flex">
        <div className="mt-24 rounded-xl w-[612px] h-[289px] bg-gradient-to-b from-cyan-200 to-white opacity-70 shadow-md"></div>
      </section>
      <section className="mt-24">
        <div className="w-[193px] h-[289px] bg-gradient-to-b from-cyan-200 to-white rounded-[10px] opacity-70 shadow-md flex items-center justify-center">Weather Cards</div>
      </section>
    </main>
  );
};
