interface CloudsBackgroundProps {
  isDay: boolean;
}

export const CloudsBackground = ({ isDay }: CloudsBackgroundProps) => {
  return (
    <div className="absolute inset-0 m-auto max-w-screen-2xl">
      <div className="mx-16 flex justify-between overflow-hidden">
        <div className="pt-[500px] md:pt-[420px]">
          <img src="/background/cloud-one.svg" alt="cloud-one" />
        </div>
        <div className="relative pt-[420px] md:pt-36">
          {!isDay && (
            <span className="transition duration-[5000ms] ease-in-out absolute pl-4 pt-8 z-0">
              <img src="/background/Stars.svg" alt="stars" />
            </span>
          )}
          <img
            className="relative z-10"
            src="/background/cloud-two.svg"
            alt="cloud-two"
          />
        </div>
      </div>
    </div>
  );
};
