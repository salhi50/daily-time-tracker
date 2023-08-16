import React from "react";
import AccordianContent from "./AccordianContent";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface TimeRangeAccordianProps {
  index: number;
}

const TimeRangeAccordian: React.FC<TimeRangeAccordianProps> = ({ index }) => {
  const [expanded, setExpanded] = React.useState(false);

  const getTitle = () => {
    const min = index;
    let max = index + 1;
    if (max === 24) max = 0;
    return `${min.toString().padStart(2, "0")}h -> ${max
      .toString()
      .padStart(2, "0")}h`;
  };

  return (
    <>
      <div className="mb-3">
        <button
          className={`d-flex justify-content-between btn bg-body-tertiary border w-100 align-items-center p-3 ${
            expanded ? "rounded-bottom-0" : ""
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{getTitle()}</span>
          {expanded ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        {expanded && (
          <div className="bg-body-tertiary p-3 border border-top-0">
            <AccordianContent index={index} />
          </div>
        )}
      </div>
    </>
  );
};

export default TimeRangeAccordian;
