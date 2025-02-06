import { useState } from "react";
import TEXT from "../../TEXT";
import "./index.css";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenuHandler = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav>
      <div className="container">
        <span className="nav__phone">{TEXT.nav.phone}</span>
        <span
          className={isMenuOpen ? "nav__button active" : "nav__button"}
          onClick={toggleMenuHandler}
        />
        <div className={isMenuOpen ? "nav__case open" : "nav__case"}>
          <a href="/" className="nav__item" onClick={toggleMenuHandler}>
            {TEXT.nav.home}
          </a>
          <a href="/services" className="nav__item" onClick={toggleMenuHandler}>
            {TEXT.nav.services}
          </a>
          <a href="/contacts" className="nav__item" onClick={toggleMenuHandler}>
            {TEXT.nav.contacts}
          </a>
        </div>
      </div>
    </nav>
  );
};
