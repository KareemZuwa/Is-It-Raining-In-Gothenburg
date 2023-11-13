interface WeatherConditionsProps {
  icon: number | undefined;
  isDay: boolean;
}

const rainIconNumbers = [
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 26, 29, 39, 40, 41, 42, 43,
];
const snowIconNumbers = [19, 20, 21, 22, 23, 25, 29, 43, 44];

export const determineWeatherConditions = ({
  icon,
  isDay,
}: WeatherConditionsProps): { isRain: boolean; isSnow: boolean } => {
  // Function to check if the given icon number represents rain
  const isRainIcon = (iconNumber: number | undefined) => {
    return iconNumber !== undefined && rainIconNumbers.includes(iconNumber);
  };

  // Function to check if the given icon number represents snow
  const isSnowIcon = (iconNumber: number | undefined) => {
    return iconNumber !== undefined && snowIconNumbers.includes(iconNumber);
  };

  const isRain =
    icon !== undefined &&
    ((isDay && isRainIcon(icon)) || (!isDay && isRainIcon(icon)));
  const isSnow =
    icon !== undefined &&
    ((isDay && isSnowIcon(icon)) || (!isDay && isSnowIcon(icon)));

  return { isRain, isSnow };
};
