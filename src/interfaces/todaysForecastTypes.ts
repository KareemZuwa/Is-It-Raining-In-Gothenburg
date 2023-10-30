export interface OneDayForecast {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

interface SunData {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
}

interface Moon {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
  Phase: string;
  Age: number;
}

interface Temperature {
  Minimum: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Maximum: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}

interface RealFeelTemperature {
  Minimum: {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
  };
  Maximum: {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
  };
}

interface WindData {
  Speed: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Direction: {
    Degrees: number;
    Localized: string;
    English: string;
  };
}

interface DegreeDaySummary {
  Heating: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Cooling: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}

interface AirAndPollen {
  Name: string;
  Value: number;
  Category: string;
  CategoryValue: number;
  Type?: string; // Optional property
}

interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
  ShortPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  Wind: WindData;
  WindGust: WindData;
  TotalLiquid: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Rain: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Snow: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Ice: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  HoursOfPrecipitation: number;
  HoursOfRain: number;
  HoursOfSnow: number;
  HoursOfIce: number;
  CloudCover: number;
  Evapotranspiration: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  SolarIrradiance: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}

interface DailyForecast {
  Date: string;
  EpochDate: number;
  Sun: SunData;
  Moon: Moon;
  Temperature: Temperature;
  RealFeelTemperature: RealFeelTemperature;
  RealFeelTemperatureShade: RealFeelTemperature;
  HoursOfSun: number;
  DegreeDaySummary: DegreeDaySummary;
  AirAndPollen: AirAndPollen[];
  Day: Day;
  Night: Day;
  Sources: string[];
  MobileLink: string;
  Link: string;
}
