interface WeatherIconProps {
  iconNumber: number;
  iconSize: "sm" | "md" | "lg" | "xl";
}

export const WeatherIcon = ({ iconNumber, iconSize }: WeatherIconProps) => {
  let iconSource = "";

  switch (iconNumber) {
    case 1:
      iconSource = "sunny.svg";
      break;
    case 2:
    case 3:
    case 4:
    case 6:
      iconSource = "cloud_sun.svg";
      break;
    case 5:
      iconSource = "hazy_sun.svg";
      break;
    case 7:
    case 8:
      iconSource = "cloud.svg";
      break;
    case 11:
      iconSource = "fog.svg";
      break;
    case 12:
      iconSource = "showers.svg";
      break;
    case 13:
    case 14:
      iconSource = "sunny_cloudy_showers.svg";
      break;
    case 15:
      iconSource = "storm.svg";
      break;
    case 16:
    case 17:
      iconSource = "sunny_cloudy_storm.svg";
      break;
    case 18:
      iconSource = "rain.svg";
      break;
    case 19:
    case 25:
    case 26:
    case 29:
      iconSource = "flurries.svg";
      break;
    case 20:
    case 21:
      iconSource = "sunny_cloudy_flurries.svg";
      break;
    case 22:
      iconSource = "snow.svg";
      break;
    case 23:
      iconSource = "sunny_cloudy_snow.svg";
      break;
    case 24:
      iconSource = "ice.svg";
      break;
    case 30:
      iconSource = "hot.svg";
      break;
    case 31:
      iconSource = "cold.svg";
      break;
    case 32:
      iconSource = "windy.svg";
      break;
    case 33:
      iconSource = "moon.svg";
      break;
    case 34:
    case 35:
    case 36:
    case 38:
      iconSource = "cloud_moon.svg";
      break;
    case 37:
      iconSource = "moon_fog.svg";
      break;
    case 39:
      iconSource = "moon_showers.svg";
      break;
    case 40:
      iconSource = "moon_rain.svg";
      break;
    case 41:
    case 42:
      iconSource = "moon_storm.svg";
      break;
    case 43:
      iconSource = "moon_flurries.svg";
      break;
    case 44:
      iconSource = "moon_snow.svg";
      break;
    default:
      iconSource = "cloud.svg";
      break;
  }

  return (
    <div
      className={
        iconSize === "sm"
          ? "w-12"
          : iconSize === "md"
          ? "w-16"
          : iconSize === "lg"
          ? "w-[6.25rem]"
          : "w-[10.625rem]"
      }
    >
      <img src={`/weather-icons/${iconSource}`} alt="Weather Icon" />
    </div>
  );
};
