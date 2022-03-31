import React from "react";
import ReactDOM from "react-dom";
// created routing for links in app
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="react_portfolio/" element={<App />}></Route>
        <Route
          path="react_portfolio/Portfolio"
          element={
            <>
              <App />
              <Portfolio />
            </>
          }
        ></Route>
        <Route
          path="react_portfolio/About"
          element={
            <>
              <App />
              <About />
            </>
          }
        ></Route>
        <Route
          path="react_portfolio/Contact"
          element={
            <>
              <App />
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="react_portfolio/Resume"
          element={
            <>
              <App />
              <Resume />
            </>
          }
        ></Route>
        <Route path="react_portfolio/*" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
