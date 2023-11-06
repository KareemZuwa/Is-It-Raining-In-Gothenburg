import { useOneDayForecastQuery } from "../queries/OneDayForecastQueries";

export const Header = () => {
  const { data } = useOneDayForecastQuery();

  console.log(data?.Headline.Text);
  return (
    <header className="h-[4.8rem] text-white flex pt-8 z-10">
      <div className="sm:hidden mr-4 w-2/5 border-b border-white border-solid overflow-hidden"></div>
      <div className="pt-7 flex-shrink-0">
        <img src="/logos/is-it-logo.svg" alt="logo" className="h-[35px] sm:h-auto"/>
      </div>
      <div className="ml-4 sm:ml-8 w-2/5 border-b border-white border-solid overflow-hidden"></div>
      <div className="hidden sm:block pl-8 pt-6 xl:w-[400px]">
        <div>Forecast Headline:</div>
        <div>{`"${data?.Headline.Text}"`}</div>
      </div>
    </header>
  );
};
