export interface HourlyForecast {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
  IsDaylight: boolean;
  Temperature: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
}
