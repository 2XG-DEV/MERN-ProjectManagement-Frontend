import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postProdReq } from "../../Actions/productReq.actions";
import { Button } from "../../Components";
import { Body1, Heading1, Heading4 } from "../../Typography";
import "./AddFeedback.css";

const AddFeedback = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("feature");
  const [detail, setDetail] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      postProdReq({ title, category, description: detail, status: "proposal" })
    );
    navigate("/");
  };

  return (
    <>
      <Link to="/" className="text-decoration-none">
        <Button className="background-transparent ">
          <img src="/assets/shared/icon-arrow-left.svg" alt="" />
          <Body1 className="color-gray-blue hover-underline">Go back</Body1>
        </Button>
      </Link>

      <form className="add-form">
        <div className="add-form__icon">
          <img src="/assets/shared/icon-new-feedback.svg" alt="" />
        </div>
        <Heading1 className="add-form__title">Create New Feedback</Heading1>
        <div className="add-form__group">
          <label htmlFor="title">Feedback Title</label>
          <Body1>Add a short descriptive headline</Body1>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="add-form__group">
          <label htmlFor="category">Category</label>
          <Body1>Choose a category for your feedback</Body1>
          <select
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
        </div>

        <div className="add-form__group">
          <label htmlFor="description">Feedback Detail</label>
          <Body1>
            Include any specific comments on what should be improved, added,
            etc.
          </Body1>
          <textarea
            className="add-form__description"
            id="description"
            name="description"
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          ></textarea>
        </div>

        <Button className="background-purple" toRun={handleAdd}>
          <Heading4 className="color-blue-gray ">Add Feedback</Heading4>
        </Button>

        <Link to="/">
          <Button className="background-deep-blue">
            <Heading4 className="color-blue-gray ">Cancel</Heading4>
          </Button>
        </Link>
      </form>
    </>
  );
};

export default AddFeedback;
