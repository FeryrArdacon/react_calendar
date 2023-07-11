import React from "react";

import "./Label.css";

/**
 *
 * @param {Object} props
 * @param {string} props.text
 * @param {string} props.forId
 * @returns
 */
export const Label = ({ text, forId }) => {
  return (
    <div className="label">
      <label htmlFor={forId}>
        <strong>{text}</strong>
      </label>
    </div>
  );
};
