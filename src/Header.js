import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { SportsBasketball } from "@material-ui/icons";
import { useStatevalue } from "./StateProvider";
// import { auth } from "./firebase.js";

// import SearchField from "react-search-field";

function Header() {
  const [{ basket, user }] = useStatevalue();
  console.log(basket);
  const login = () => {
    //  if (user) {
    //    auth.signout();
    //  }
  };
  return (
    <nav className="header">
      {/* logo on the left */}

      <Link to="/login">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_SearchIcon" />
      </div>

      {/* 3links */}
      <div className="header_nav">
        <Link to="/login" className="header-link">
          <div className="header_option">
            <span className="header_optionLineone">Hello </span>
            <span className="header_optionLinetwo">Signin</span>
          </div>
        </Link>
        {/* second links */}
        <Link to="/" className="header-link">
          <div className="header_option">
            <span className="header_optionLineone">Return</span>
            <span className="header_optionLinetwo">Iteams</span>
          </div>
          {/* third links */}
        </Link>
        <Link to="/" className="header-link">
          <div className="header_option">
            <span className="header_optionLineone">Your</span>
            <span className="header_optionLinetwo">Prime</span>
          </div>
        </Link>
        {/* fourth links */}
        <Link to="/checkout" className="header_link">
          {/* add the carts icon
             add the no of iteams in carts */}
          <div className="header_optionBasket">
            <AddShoppingCartIcon />
            {
              <span className="header_optionLineTwo header_Basketcount">
                {basket?.length}
              </span>
            }
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
