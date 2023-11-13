import { useOneDayForecastQuery } from "../queries/OneDayForecastQueries";

interface HeaderProps {
  isDay: boolean;
}

export const Header = ({ isDay }: HeaderProps) => {
  const { data } = useOneDayForecastQuery();

  return (
    <header className="h-[4.8rem] text-white flex pt-8 z-10">
      <div className="sm:hidden mr-4 w-2/5 h-4 sm:h-auto border-b border-white border-solid overflow-hidden"></div>
      <div className="sm:pt-7 flex-shrink-0">
        <img
          src="/logos/is-it-logo.svg"
          alt="logo"
          className="h-[35px] sm:h-auto"
        />
      </div>
      <div className="ml-4 sm:ml-8 w-2/5 h-4 sm:h-auto border-b border-white border-solid overflow-hidden"></div>
      <div className="hidden sm:block pl-8 pt-6 xl:w-[400px]">
        <div>Forecast Headline:</div>
        <div>
          {isDay
            ? `"${data?.DailyForecasts[0].Day.LongPhrase}"`
            : `"${data?.DailyForecasts[0].Night.LongPhrase}"`}
        </div>
      </div>
    </header>
  );
};
