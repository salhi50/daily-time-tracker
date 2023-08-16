import React from "react";
import DayContext from "../dayContext";
import { marked } from "marked";
import { Actions } from "../daysReducer";

interface AccordianContentProps {
  index: number;
}

const AccordianContent: React.FC<AccordianContentProps> = ({ index }) => {
  const { selectedDay, dispatch } = React.useContext(DayContext);
  const [editEnabled, setEditEnabled] = React.useState(() => {
    if (selectedDay) {
      return selectedDay.hours[index].content.length === 0;
    }
    return true;
  });
  const areaRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    const area = areaRef.current;
    if (editEnabled && area) {
      area.focus();
      area.setSelectionRange(area.value.length, area.value.length);
      area.scrollTop = area.scrollHeight;
    }
  }, [editEnabled]);

  const updateAccordianContent = (newContent: string) => {
    const day = selectedDay;
    if (day) {
      day.hours[index].content = newContent;
      dispatch({
        type: Actions.UPDATE,
        payload: {
          id: day.id,
          update: { hours: day.hours },
        },
      });
    }
  };

  const handleBlur = (evt: React.FocusEvent<HTMLTextAreaElement>) => {
    setEditEnabled(
      areaRef.current !== null && areaRef.current.value.length === 0
    );
    updateAccordianContent(evt.target.value);
  };

  const content = selectedDay ? selectedDay.hours[index].content : "";

  return (
    <>
      {editEnabled ? (
        <textarea
          className="form-control bg-transparent border-0 shadow-none"
          style={{ resize: "none" }}
          defaultValue={content}
          placeholder="What did you do at this time?"
          onBlur={handleBlur}
          ref={areaRef}
        />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          onClick={() => setEditEnabled(true)}
        />
      )}
    </>
  );
};

export default AccordianContent;
