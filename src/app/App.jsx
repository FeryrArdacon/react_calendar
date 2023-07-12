import React, { useState } from "react";

import "./App.css";

import { AppointmentList } from "./appointments/AppointmentList";
import { NewAppointmentForm } from "./appointments/NewAppointmentForm";

export const App = () => {
  const [appointments, setAppointments] = useState([]);

  const handleSaveNewAppointmant = (appointment) => {
    setAppointments((actAppointments) => {
      return [appointment, ...actAppointments];
    });
  };

  return (
    <>
      <main>
        <h1>Terminkalender</h1>
        <NewAppointmentForm onSave={handleSaveNewAppointmant} />
        <AppointmentList appointments={appointments} />
      </main>
    </>
  );
};
