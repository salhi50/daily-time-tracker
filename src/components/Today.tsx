import React from "react";

const Today: React.FC = () => {
  const todayDate = React.useMemo(() => {
    const now = new Date();
    const [dayName, month, day, year] = now.toDateString().split(" ");
    return `${dayName}, ${month} ${day} ${year}`;
  }, []);

  return (
    <>
      <h2>Today is {todayDate}</h2>
    </>
  );
};

export default Today;
