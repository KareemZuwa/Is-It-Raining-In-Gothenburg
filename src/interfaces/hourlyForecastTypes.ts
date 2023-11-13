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

export interface MinuteCastForecast {
  Summary: WeatherSummary;
  Summaries: MinuteSummary[];
  Link: string;
  MobileLink: string;
}
interface WeatherSummary {
  Phrase: string;
  Type: null | string;
  TypeId: number;
}
interface MinuteSummary {
  StartMinute: number;
  EndMinute: number;
  CountMinute: number;
  MinuteText: string;
  Type: null | string;
  TypeId: number;
}
