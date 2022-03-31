// all imports needed to render page
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { useLocation } from "react-router-dom";
// Also removed to use react router dom
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";
// import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  // Set document title to current page rendered
  useEffect(() => {
    document.title = currentPage + " | David Tierney";
  });
  const navMenu = ["Portfolio", "About", "Contact", "Resume"];
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();
  // console.log(location);
  // Renders content based on what page is clicked
  // Changed this to used react router dom
  const renderLandingPage = () => {
    // console.log("!!!!!!Current Page!!!!!!!", currentPage);
    if (location.pathname === "/react_portfolio/") return <Landing />;
  };
  // Passes menu items, current page and page change function to nav bar, renders page in to main body of html
  return (
    <div>
      <Nav
        navMenu={navMenu}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>{renderLandingPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
