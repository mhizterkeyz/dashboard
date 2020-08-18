import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";

const navInitials = [
  {
    initial: "pn",
    theme: "blue",
  },
  {
    initial: "jl",
    theme: "green",
  },
  {
    initial: "lg",
    theme: "purple",
  },
  {
    initial: "aw",
    theme: "orange",
  },
  {
    initial: "sa",
    theme: "darkish",
  },
];

const App = () => {
  return (
    <div className="App">
      <Navigation initials={navInitials} />
      <Header hasNotifications={true} />
      <div className="main-wrapper"></div>
    </div>
  );
};

export default App;
