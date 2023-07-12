import React from "react";

import "./App.css";

import { AppointmentList } from "./appointments/AppointmentList";
import { NewAppointmentForm } from "./appointments/NewAppointmentForm";

const appointments = [
  {
    title: "Neujahr!! \\o/",
    datetime: new Date("2022-01-01T00:00:00"),
    participants: ["Patrick", "Max", "Marek"],
  },
  {
    title: "Kreatives Brainstorming",
    datetime: new Date("2022-07-10T19:00:00"),
    participants: ["Patrick", "Bekka"],
  },
  {
    title: "Auto vorbeibringen",
    datetime: new Date("2023-01-02T11:30:00"),
    participants: ["Patrick", "Peter"],
  },
  {
    title: "Mit dem Hund zusammen spazieren",
    datetime: new Date("2023-03-03T17:00:00"),
    participants: ["Patrick", "Jasmin"],
  },
  {
    title: "Zocken!",
    datetime: new Date("2022-05-14T13:00:00"),
    participants: ["Patrick", "Pascal"],
  },
];

export const App = () => {
  const handleSaveNewAppointmant = () => {};

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
