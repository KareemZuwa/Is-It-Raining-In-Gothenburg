interface CloudsBackgroundProps {
  isDay: boolean;
}

export const CloudsBackground = ({ isDay }: CloudsBackgroundProps) => {
  return (
    <div className="min-h-screen mx-16 flex justify-between overflow-hidden">
      <div className="pt-[420px] ml-2.5">
        <img src="/background/cloud-one.svg" alt="cloud-one" />
      </div>
      <div className="relative pt-[153px] mr-2.5">
        {!isDay && (
          <span className="absolute pl-2.5 z-0">
            <img src="../background/Stars.svg" alt="" />
          </span>
        )}

        <img className="relative z-10" src="/background/cloud-two.svg" alt="cloud-two" />
      </div>
    </div>
  );
};
