import React from "react";
import "./style.css";

export const Column = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const ColumnLarge = ({ children, className }) => {
  return <div className={`column-large ${className}`}>{children}</div>;
};

const Container = ({ children, className }) => {
  return <div className={`columns ${className}`}>{children}</div>;
};

export default Container;
