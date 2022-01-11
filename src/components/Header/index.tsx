import React from "react";
import { HeaderWrapper } from "./style";
import iconCart from "../../assets/icons/icon1.png";
import iconGlass from "../../assets/icons/icon2.png";
import iconUser from "../../assets/icons/icon3.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="navbar--left">
          <ul className="navbar--left-list">
            <li>Home</li>
            <li>Menu</li>
            <li>About us</li>
            <li>
              <button>Order now</button>
            </li>
          </ul>
        </div>
        <div className="navbar--right">
          <div className="navbar--right-search">
            <label htmlFor="searchFiled">
              <input type="text" id="searchFiled" placeholder="Search" />
              <img src={iconGlass} />
            </label>
          </div>
          <div className="navbar--right-acount">
            <img src={iconUser} />
            <a href="#">Acount</a>
          </div>
          <div className="navbar--right-cart">
            <img src={iconCart} />
            <div className="navbar--right--quantity">1</div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
