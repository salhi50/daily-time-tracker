import React from "react";
import { isToday } from "../days";
import DayContext from "../dayContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const DayController: React.FC = () => {
  const { selectedDay, setSelectedDay, days } = React.useContext(DayContext);

  const isFirstDay = () => {
    if (selectedDay) {
      return selectedDay.id === days[0].id;
    }
    return false;
  };

  const isLastDay = () => {
    if (selectedDay) {
      return selectedDay.id === days[days.length - 1].id;
    }
    return false;
  };

  const getCurrentDayIndex = () => {
    if (selectedDay) {
      return days.findIndex((d) => d.id === selectedDay.id);
    }
    return -1;
  };

  const getNextDay = () => {
    if (isLastDay()) return;
    setSelectedDay(days[getCurrentDayIndex() + 1]);
  };

  const getPrevDay = () => {
    if (isFirstDay()) return;
    setSelectedDay(days[getCurrentDayIndex() - 1]);
  };

  const getTitle = () => {
    if (selectedDay) {
      return isToday(selectedDay.date)
        ? "Today"
        : new Date(selectedDay.date).toLocaleDateString();
    }
    return "";
  };

  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-light border rounded-end-0"
          disabled={isFirstDay()}
          onClick={getPrevDay}
        >
          <BsChevronLeft />
        </button>
        <span className="py-2 px-3 bg-light border-start-0 border-end-0 border">
          {getTitle()}
        </span>
        <button
          className="btn btn-light border rounded-start-0"
          disabled={isLastDay()}
          onClick={getNextDay}
        >
          <BsChevronRight />
        </button>
      </div>
    </>
  );
};

export default DayController;
