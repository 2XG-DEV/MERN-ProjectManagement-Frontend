import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeFilters } from "../../Actions/productReq.actions";
import { logout } from "../../Actions/user.actions";
import { Heading2 } from "../../Typography";
import "./MobileMenu.css";

const Mobilemenu = () => {
  const cats = ["All", "bug", "UI", "UX", "enhancement", "feature"];
  const { filters } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  return (
    <div className="mobilemenu">
      <div className="mobilemenu__background"></div>
      <div className="mobilemenu__rightpane">
        <div className="mobilemenu__container">
          {cats.map((cat) => (
            <button
              key={cat}
              className={`mobilemenu__filterbutton ${
                filters.includes(cat) && "filterbtn-active"
              }`}
              onClick={() => {
                if (filters.includes(cat)) {
                  const newFilters = filters.filter((item) => item !== cat);
                  dispatch(changeFilters(newFilters));
                } else {
                  dispatch(changeFilters([...filters, cat]));
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mobilemenu__container flex space-between">
          <Heading2>Roadmap</Heading2>
          <Link to="/roadmap">View</Link>
        </div>
        <div className="mobilemenu__container">
          <button
            className="logout-button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
