// dependencies
import React from "react";

// routes
import Routes from "./routes";

// styles
import "./styles.css";

// components
import Header from "./components/Header";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
