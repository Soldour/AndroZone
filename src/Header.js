import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthontication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOslvMmK7K1XFLw44TplMNblJkS3zifgcm7A&usqp=CAU"
          // src="https://designcontest.nyc3.digitaloceanspaces.com/data/contests/133164/entries/a66b9aa67c97016c.jpg"
          src="https://cdn.dribbble.com/users/633027/screenshots/3285561/andromedaaaaaaaaaa.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="headr_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthontication} className="header_option">
            <span className="header_optionLineOne"> Hello guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          {" "}
          <span className="header_optionLineOne"> Returns</span>
          <span className="header_optionLineTwo"> & Orders</span>
        </div>
        <div className="header_option">
          {" "}
          <span className="header_optionLineOne"> hello user</span>
          <span className="header_optionLineTwo"> hello user</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
