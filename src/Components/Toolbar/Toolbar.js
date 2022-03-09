import React from "react";
import "./Toolbar.css";
import Button from "../Button/Button";
import { Body2, Heading4 } from "../../Typography";
import { useDispatch } from "react-redux";
import {
  sortComAsc,
  sortComDeasc,
  sortUpvAsc,
  sortUpvDeasc,
} from "../../Actions/productReq.actions";
import { Link } from "react-router-dom";

const Toolbar = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "sort-com-up") dispatch(sortComDeasc());
    if (e.target.value == "sort-com-down") dispatch(sortComAsc());
    if (e.target.value == "sort-upv-up") dispatch(sortUpvDeasc());
    if (e.target.value == "sort-upv-down") dispatch(sortUpvAsc());
  };
  return (
    <div className="toolbar">
      <div className="toolbar__sorter">
        <Body2 className="color-white">Sort by:</Body2>
        <select
          onChange={handleChange}
          name="sort-options"
          id="sort"
          className="toolbar__select"
        >
          <option value="sort-upv-up">Most Upvotes</option>
          <option value="sort-upv-down">Least Upvotes</option>
          <option value="sort-com-up">Most Comments</option>
          <option value="sort-com-down">Least Comments</option>
        </select>
      </div>

      <Link to="/add" className="text-decoration-none">
        <Button className="background-purple">
          <img src="./assets/shared/icon-plus.svg" alt="plus" />
          <Heading4 className="color-blue-gray ">Add Feedback</Heading4>
        </Button>
      </Link>
    </div>
  );
};

export default Toolbar;
