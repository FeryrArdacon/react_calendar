import React, { useState, useId } from "react";

import "./NewAppointmentForm.css";

import { Label } from "../common/Label";

/**
 *
 * @returns {{title:string,datetime:Date,participants:Array<string>}}
 */
const createEmptyAppointment = () => ({
  title: "",
  datetime: new Date(),
  participants: [],
});

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
  /** @type {[Array<string>,Function]} */
  const [participants, setParticipants] = useState([]);

  let participantstext = "";
  if (participants.length > 1)
    participantstext = participants.reduce((prev, next) => prev + ", " + next);
  else if (participants.length === 1) participantstext = participants[0];

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
    const dateArray = date.split(".");
    const dateIso = dateArray
      .reverse()
      .reduce((prev, next) => prev + "-" + next);

    setDatetime((actDate) => {
      return new Date(
        `${dateIso}T${actDate.getHours()}:${actDate.getMinutes()}`
      );
    });
  };

  const handleTimeChange = (event) => {
    /** @type {string} */
    const time = event.target.value;

    setDatetime((actDate) => {
      return new Date(
        `${actDate.getFullYear()}-${actDate.getMonth()}-${actDate.getDate()}T${time}`
      );
    });
  };

  const handleParticipantsChange = (event) => {
    /** @type {string} */
    const newParticipantsText = event.target.value;

    setParticipants(
      newParticipantsText.split(",").map((participant) => participant.trim())
    );
  };

  const handleOnSave = () => {
    onSave({
      title,
      datetime,
      participants,
    });
  };

  return (
    <div>
      <form className="appointmentform">
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
          value={datetime.toLocaleDateString()}
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
          value={participantstext}
          onChange={handleParticipantsChange}
        />
      </form>
      <button onClick={handleOnSave}>Speichern</button>
    </div>
  );
};
