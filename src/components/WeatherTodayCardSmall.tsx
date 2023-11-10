import { WeatherIcon } from "./WeatherIcon";

interface WeatherTodayCardSmallProps {
  weekDay: string;
  day: string;
  month: string;
  weatherDayIcon: number | undefined;
  weatherDayIconPhrase: string | undefined;
  maxTemprature: number | undefined;
}

export const WeatherTodayCardSmall = ({
  weekDay,
  day,
  month,
  weatherDayIcon,
  maxTemprature
}: WeatherTodayCardSmallProps) => {
  return (
    <div className="relative text-center xxs:hidden py-8">
      <section>
        <article>
          {weekDay && day && month == null ? (
            <div>
              <h1 className="rounded mb-4 h-8 w-full animate-pulse bg-white"></h1>
              <h2 className="rounded h-4 w-full animate-pulse bg-white"></h2>
            </div>
          ) : (
            <div>
              <h1 className="text-[2rem] font-semibold">{weekDay}</h1>
              <h2 className="text-base">
                {day} {month}
              </h2>
            </div>
          )}
        </article>
        <article className="mt-4 flex flex-col items-center">
        {weatherDayIcon == null ? (
              <WeatherIcon iconNumber={7} iconSize={"xl"} />
            ) : (
              <WeatherIcon iconNumber={weatherDayIcon} iconSize={"xl"} />
            )}
        </article>
        <article className="mt-4 flex flex-col items-center">
        {maxTemprature == null ? (
              <div className="rounded mb-4 h-8 w-full animate-pulse bg-white"></div>
            ) : (
              <div className="flex justify-between">
                <h1 className="text-[3rem] font-semibold">
                  {Math.ceil(maxTemprature)}º
                </h1>
              </div>
            )}
        </article>
      </section>
    </div>
  );
};
