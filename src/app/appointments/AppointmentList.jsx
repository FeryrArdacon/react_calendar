import React from "react";

import "./AppointmentList.css";

import { Appointment } from "./Appointment";

/**
 *
 * @param {Object} props
 * @param {Array<{title:string,datetime:Date,participants:Array<string>}>} props.appointments
 * @returns
 */
export const AppointmentList = ({ appointments }) => {
  const appointmentListElements =
    appointments.length > 0 ? (
      appointments.map((appointment, index) => {
        return (
          <Appointment
            key={`appointment-${index}`}
            title={appointment.title}
            datetime={appointment.datetime}
            participants={appointment.participants}
          />
        );
      })
    ) : (
      <em>Es sind keine Termine vorhanden.</em>
    );

  return <div className="appointmentlist">{appointmentListElements}</div>;
};
