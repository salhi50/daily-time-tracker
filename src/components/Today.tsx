import React from "react";

const Today: React.FC = () => {
  const todayDate = React.useMemo(() => {
    const now = new Date();
    const [dayName, month, day, year] = now.toDateString().split(" ");
    return `${dayName}, ${month} ${day} ${year}`;
  }, []);

  return (
    <>
      <h5 className="fw-normal">
        Today is <span className="fw-medium">{todayDate}</span>
      </h5>
    </>
  );
};

export default Today;
