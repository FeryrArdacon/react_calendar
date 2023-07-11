import React from "react";

import "./AppointmentList.css";

import { Appointment } from "./Appointment";

export const AppointmentList = ({ appointments }) => {
  const appointmentListElements = appointments.map((appointment, index) => {
    return (
      <li key={`appointment-${index}`}>
        <Appointment
          title={appointment.title}
          datetime={appointment.datetime}
          participants={appointment.participants}
        />
      </li>
    );
  });

  return <ul className="appointmentlist">{appointmentListElements}</ul>;
};
