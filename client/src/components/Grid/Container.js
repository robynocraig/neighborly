import React from "react";

export const Container = ({ fluid, children }) => (
  <div

    style={{ paddingTop: 20 }}
    className={`container${fluid ? "-fluid" : ""}`}
  >
    {children}
  </div>
);
