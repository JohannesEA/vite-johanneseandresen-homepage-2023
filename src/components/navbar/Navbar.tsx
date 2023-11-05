import React, { useState } from "react";
import Hamburger from "hamburger-react";
import useScreenSize from "../../hooks/useScreenSize";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const links = ["Hjem", "Om", "Erfaring", "Portfølje", "Kontakt"];
  const screenSize = useScreenSize();

  return (
    <nav className="navbar">
      <img className="navbar__logo" src="src/assets/logo.png" alt="Logo" />
      {screenSize.width > 500 ? (
        <div className="navbar__links-container">
          {links.map((link, index) => (
            <a
              key={index}
              className="navbar__link"
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
        </div>
      ) : (
        <>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#f2f2f2" />
          <div
            className={`navbar__links-container--active ${
              isOpen ? "is-open" : ""
            }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                className="navbar__link"
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
