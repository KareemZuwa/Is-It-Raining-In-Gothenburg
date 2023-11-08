export const SnowFall = () => {
  return (
    <span className="hidden absolute inset-x-8 bottom-32 md:bottom-80 mr-4 sm:grid grid-cols-8 justify-center animate-fade-down animate-once animate-duration-[5000ms] animate-ease-in-out">
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[3000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-500"
        src="/background/snow1.svg"
        alt="snow-one"
      />
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center md:pt-12 animate-delay-200 opacity-80"
        src="/background/snow2.svg"
        alt="snow-two"
      />
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-700 opacity-80"
        src="/background/snow3.svg"
        alt="snow-three"
      />
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center -pt-16 md:pt-10 opacity-80"
        src="/background/snow4.svg"
        alt="snow-four"
      />{" "}
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-100 opacity-80"
        src="/background/snow1.svg"
        alt="snow-one"
      />{" "}
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center pt-4 animate-delay-400 opacity-80"
        src="/background/snow2.svg"
        alt="snow-two"
      />
           <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-500"
        src="/background/snow3.svg"
        alt="snow-three"
      />
      <img
        className="w-2 md:w-4 lg:w-auto animate-fade-up animate-infinite animate-duration-[4000ms] animate-ease-in animate-reverse animate-fill-forwards justify-self-center animate-delay-200 opacity-80"
        src="/background/snow4.svg"
        alt="snow-four"
      />
    </span>
  );
};
