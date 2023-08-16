import React from "react";
import {
  isMorning,
  isAfternoon,
  isEvening,
  isNight,
  GreetingMessage,
} from "../date";

interface GreetingProps {
  date?: Date;
}

const Greeting: React.FC<GreetingProps> = ({ date = new Date() }) => {
  const message = React.useMemo(() => {
    const hours = date.getHours();
    if (isMorning(hours)) {
      return GreetingMessage.Morning;
    } else if (isAfternoon(hours)) {
      return GreetingMessage.Afternoon;
    } else if (isEvening(hours)) {
      return GreetingMessage.Evening;
    } else if (isNight(hours)) {
      return GreetingMessage.Night;
    }
    return GreetingMessage.Default;
  }, [date]);

  return (
    <>
      <h4 className="fw-normal mb-2">{message}</h4>
    </>
  );
};

export default Greeting;
