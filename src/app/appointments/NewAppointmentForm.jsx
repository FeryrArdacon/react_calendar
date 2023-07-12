import React, { useState, useId } from "react";

import "./NewAppointmentForm.css";

import { Label } from "../common/Label";

const getDateISO = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}-${month >= 10 ? month : `0${month}`}-${
    day >= 10 ? day : `0${day}`
  }`;
};

/**
 *
 * @param {Function} onSave
 * @returns
 */
export const NewAppointmentForm = ({ onSave }) => {
  /** @type {[string,Function]} */
  const [title, setTitle] = useState("");
  /** @type {[Date,Function]} */
  const [datetime, setDatetime] = useState(new Date());
  /** @type {[string,Function]} */
  const [participantsText, setParticipantsText] = useState([]);

  console.log(datetime);

  const titleId = useId();
  const dateId = useId();
  const timeId = useId();
  const participantsId = useId();

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleDateChange = (event) => {
    /** @type {string} */
    const date = event.target.value;
    setDatetime((actDate) => {
      return new Date(`${date}T${actDate.getHours()}:${actDate.getMinutes()}`);
    });
  };

  const handleTimeChange = (event) => {
    /** @type {string} */
    const time = event.target.value;
    setDatetime((actDate) => {
      return new Date(`${getDateISO(actDate)}T${time}`);
    });
  };

  const handleParticipantsChange = (event) => {
    /** @type {string} */
    const newParticipantsText = event.target.value;
    setParticipantsText(newParticipantsText);
  };

  const handleOnSave = () => {
    onSave({
      title,
      datetime,
      participants: participantsText
        .split(",")
        .map((participant) => participant.trim()),
    });
  };

  return (
    <div>
      <form className="appointmentform">
        <h3>Neuen Termin anlegen</h3>
        <span />
        <Label text="Titel:" forId={titleId} />
        <input
          id={titleId}
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <Label text="Datum:" forId={dateId} />
        <input
          id={dateId}
          type="date"
          value={getDateISO(datetime)}
          onChange={handleDateChange}
        />
        <Label text="Uhrzeit:" forId={timeId} />
        <input
          id={timeId}
          type="time"
          value={datetime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          onChange={handleTimeChange}
        />
        <Label text="Teilnehmer:" forId={participantsId} />
        <input
          id={participantsId}
          type="text"
          value={participantsText}
          onChange={handleParticipantsChange}
        />
        <span></span>
        <button type="button" onClick={handleOnSave}>
          Speichern
        </button>
      </form>
    </div>
  );
};
