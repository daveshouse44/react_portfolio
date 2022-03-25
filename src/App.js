// all imports needed to render page
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  // Set document title to current page rendered
  useEffect(() => {
    document.title = currentPage + " | David Tierney";
  });
  const navMenu = ["Portfolio", "About", "Contact", "Resume"];
  const [currentPage, setCurrentPage] = useState("");
  // Renders content based on what page is clicked
  const renderPage = () => {
    // console.log("!!!!!!Current Page!!!!!!!", currentPage);
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Portfolio />;
  };
  // Passes menu items, current page and page change function to nav bar, renders page in to main body of html
  return (
    <div>
      <Nav
        navMenu={navMenu}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
