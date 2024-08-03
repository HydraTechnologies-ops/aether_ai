import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/onboarding/Welcome";
import Boarding from "./components/onboarding/Boarding";
import Boarding2 from "./components/onboarding/Boarding2";
import Login from "./components/onboarding/Login";
import Register from "./components/onboarding/Register";
import Otp from "./components/onboarding/Otp";
import Enterhome from "./components/onboarding/Enterhome";

import "./assets/css/styles.css";
import "./assets/css/bootstrap.min.css";
import "./assets/fonts/font-icons.css";
import "./assets/fonts/fonts.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Welcome} />
        <Route path="/boarding" component={Boarding} />
        <Route path="/boarding2" component={Boarding2} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/otp" component={Otp} />
        <Route path="/enterhome" component={Enterhome} />
      </Routes>
    </Router>
  );
}

export default App;
