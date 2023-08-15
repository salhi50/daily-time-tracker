export enum GreetingMessage {
  Morning = "Good morning",
  Afternoon = "Good afternoon",
  Evening = "Good evening",
  Night = "Good night",
  Default = "Hello",
}

export type isMorningFunction = (hours: number) => boolean;
export type isAfternoonFunction = (hours: number) => boolean;
export type isEveningFunction = (hours: number) => boolean;
export type isNightFunction = (hours: number) => boolean;

export const isMorning: isMorningFunction = (hours) => {
  return hours >= 8 && hours < 12;
};

export const isAfternoon: isAfternoonFunction = (hours) => {
  return hours >= 12 && hours < 17;
};

export const isEvening: isEveningFunction = (hours) => {
  return hours >= 17 && hours < 20;
};

export const isNight: isNightFunction = (hours) => {
  return hours >= 20 || (hours >= 0 && hours < 12);
};
