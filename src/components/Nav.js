import React from "react";
// allows a href tag to create link and change url
import { Link } from "react-router-dom";

const Nav = (props) => {
  // Props destructured
  const { navMenu = [], currentPage, setCurrentPage } = props;

  return (
    <header>
      <div>
        <h1>
          <span>&#123;</span> David Tierney | Developer <span>&#125;</span>
        </h1>
      </div>
      <div>
        <nav>
          <ul className="nav-list">
            {navMenu.map((menu) => (
              <li
                key={`${menu}`}
                className={`${currentPage === menu && "navActive"}`}
                onClick={() => setCurrentPage(menu)}
              >
                <Link to={`/react_portfolio/${menu}`}>{menu}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
