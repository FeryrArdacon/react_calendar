import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import { App } from "./app/App";

const root = createRoot(document.querySelector("#calendar-react-app"));
root.render(<App />);