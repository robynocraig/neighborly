import React from "react";

export const Container = ({ fluid, children }) => (
  <div

    style={{ paddingTop: 100,
    backgroundColor:'white' }}
    className={`container${fluid ? "-fluid" : ""}`}
  >
    {children}
  </div>
);
