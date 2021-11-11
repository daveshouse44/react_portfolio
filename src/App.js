// all imports needed to render page
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Set document title to current page rendered
  useEffect(() => {
    document.title = currentPage;
  });
  const navMenu = ["About", "Portfolio", "Contact", "Resume"];
  const [currentPage, setCurrentPage] = useState(navMenu[0]);

  const renderPage = () => {
    console.log("!!!!!!Current Page!!!!!!!", currentPage);
    switch (currentPage) {
      // case 'Portfolio':
      //   return <Portfolio></Portfolio>
      //   break;
      case 'Contact':
        return <Contact></Contact>
        break;
      // case 'Resume':
      //   return <Resume></Resume>
      //   break;
      default:
        return <About></About>;
        break;
    }
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
