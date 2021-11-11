import React, { useState } from "react";

const Nav = (props) => {
  // Props destructured
  const { navMenu = [], currentPage, setCurrentPage } = props;

  return (
    <header>
      <div>
        <h1>David Tierney</h1>
      </div>
      <div>
        <nav>
          <ul className="nav-list">
            {navMenu.map((menu) => (
              <li
                className={`${currentPage === menu && "navActive"}`}
                onClick={() => setCurrentPage(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
