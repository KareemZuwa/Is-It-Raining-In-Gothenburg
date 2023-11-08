export const Raindrops = () => {
  return (
    <span className="hidden absolute inset-x-8 bottom-12 md:bottom-64 lg:bottom-72 mr-4 sm:grid grid-cols-6 justify-center animate-fade-down animate-once animate-duration-[5000ms] animate-ease-in-out">
      <img
        className="animate-fade-up animate-infinite animate-duration-[1700ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-500"
        src="/background/drop.svg"
        alt="rain-drop"
      />
           <img
        className="animate-fade-up animate-infinite animate-duration-[1700ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center pt-12 animate-delay-200 opacity-80"
        src="/background/drop.svg"
        alt="rain-drop"
      />
           <img
        className="animate-fade-up animate-infinite animate-duration-[1700ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-700 opacity-80"
        src="/background/drop.svg"
        alt="rain-drop"
      />
           <img
        className="animate-fade-up animate-infinite animate-duration-[1700ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center pt-10 opacity-80"
        src="/background/drop.svg"
        alt="rain-drop"
      />     <img
      className="animate-fade-up animate-infinite animate-duration-[1700ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-100 opacity-80"
      src="/background/drop.svg"
      alt="rain-drop"
    />     <img
    className="animate-fade-up animate-infinite animate-duration-[1700ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center pt-4 animate-delay-400 opacity-80"
    src="/background/drop.svg"
    alt="rain-drop"
  />
    </span>
  );
};
