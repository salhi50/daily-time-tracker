import React from "react";
import { Day, isToday } from "../days";

interface DayControllerProps {
  days: Day[];
  selectedDay: Day;
  setSelectedDay: React.Dispatch<React.SetStateAction<Day | null>>;
}

const DayController: React.FC<DayControllerProps> = ({
  days,
  selectedDay,
  setSelectedDay,
}) => {
  const isFirstDay = selectedDay.id === days[0].id;
  const isLastDay = selectedDay.id === days[days.length - 1].id;
  const currentDayIndex = days.findIndex((d) => d.id === selectedDay.id);

  const getNextDay = () => {
    if (isLastDay) return;
    setSelectedDay(days[currentDayIndex + 1]);
  };

  const getPrevDay = () => {
    if (isFirstDay) return;
    setSelectedDay(days[currentDayIndex - 1]);
  };

  const title = isToday(selectedDay.date)
    ? "Today"
    : new Date(selectedDay.date).toLocaleDateString();

  return (
    <>
      <button disabled={isFirstDay} onClick={getPrevDay}>
        &lt;
      </button>
      <span>{title}</span>
      <button disabled={isLastDay} onClick={getNextDay}>
        &gt;
      </button>
    </>
  );
};

export default DayController;
