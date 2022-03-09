import React, { useState } from "react";
import { Body2, Heading3 } from "../../Typography";
import Mobilemenu from "../Mobilemenu/Mobilemenu";
import Toolbar from "../Toolbar/Toolbar";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="header header--background">
        <div className="header__wrapper">
          <div className="header__title">
            <Heading3 className="color-white">DoubleG Media</Heading3>
            <Body2 className="color-white opacity-1">Feedback Board</Body2>
          </div>
          <button
            className="header__menu"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img
              src={
                showMenu
                  ? `./assets/shared/mobile/icon-close.svg`
                  : `./assets/shared/mobile/icon-hamburger.svg`
              }
              alt="menu"
            />
          </button>
        </div>
      </div>
      <Toolbar />

      {showMenu && <Mobilemenu />}
    </>
  );
};

export default Header;
