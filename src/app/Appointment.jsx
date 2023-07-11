import React, { useId } from "react";

import "./Appointment.css";

import { Label } from "./Label";

export const Appointment = ({ title, datetime, participants }) => {
  const dateId = useId();
  const timeId = useId();
  const participantsId = useId();

  const date = datetime.toLocaleDateString();
  const time = datetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const participantsText = participants.reduce(
    (prev, next) => prev + ", " + next
  );

  return (
    <div className="appointment">
      <h4>{title}</h4>
      <div className="appointmentdata">
        <Label text="Datum:" forId={dateId} />
        <span id={dateId}>{date}</span>
        <Label text="Uhrzeit:" forId={timeId} />
        <span id={timeId}>{time}</span>
        <Label text="Teilnehmer:" forId={participantsId} />
        <span id={participantsId}>{participantsText}</span>
      </div>
    </div>
  );
};
