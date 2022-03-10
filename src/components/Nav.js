import React from "react";

const Nav = (props) => {
  // Props destructured
  const { navMenu = [], currentPage, setCurrentPage } = props;

  return (
    <header>
      <div>
        <h1>David Tierney | Developer</h1>
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
