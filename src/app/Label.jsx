import React from "react";

import "./Label.css";

export const Label = ({ text, forId }) => {
  return (
    <div className="label">
      <label htmlFor={forId}>
        <strong>{text}</strong>
      </label>
    </div>
  );
};
