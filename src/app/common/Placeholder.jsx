import React from "react";

/**
 *
 * @param {Object} props
 * @param {string} props.type
 */
export const Placeholder = ({ type }) => {
  switch (type) {
    case "inline":
      return <span />;
    case "block":
    default:
      return <div />;
  }
};
