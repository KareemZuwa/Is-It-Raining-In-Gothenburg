import { Moon } from "./Moon";
import { Raindrops } from "./Raindrops";
import { SnowFall } from "./SnowFall";
import { Stars } from "./Stars";
import { Sun } from "./Sun";

interface CloudsBackgroundProps {
  isDay: boolean;
}

export const CloudsBackground = ({ isDay }: CloudsBackgroundProps) => {
  const isRain = false;
  const isSnow = false;

  return (
    <div className="absolute inset-0 m-auto max-w-screen-2xl">
      <div className="mx-16 flex justify-between overflow-hidden">
        <div className="pt-[500px] md:pt-[420px]">
          <img
            className="animate-fade-down animate-once animate-duration-[5000ms] animate-ease-in-out"
            src="/background/cloud-one.svg"
            alt="cloud-one"
          />
        </div>
        <div className="relative pt-[420px] md:pt-36">
          {!isDay && (
            <Stars />
          )}
          {isDay ? <Sun /> : <Moon />}
          <img
            className="relative z-10 animate-fade-down animate-once animate-duration-[5000ms] animate-ease-in-out"
            src="/background/cloud-two.svg"
            alt="cloud-two"
          />
          {isRain && <Raindrops />}
          {isSnow && <SnowFall />}
        </div>
      </div>
    </div>
  );
};
