import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProdReq, putProdReq } from "../../Actions/productReq.actions";
import { Button } from "../../Components";
import { Body1, Heading1, Heading4 } from "../../Typography";

const Editfeedback = () => {
  const productReqs = useSelector((state) => state.productReqs);
  const { productRequests } = productReqs;
  const params = useParams();
  const currentReq = productRequests.find((e) => e._id === params.id);
  const navigate = useNavigate();

  const [title, setTitle] = useState(currentReq.title);
  const [category, setCategory] = useState(currentReq.category);
  const [detail, setDetail] = useState(currentReq.description);
  const [status, setStatus] = useState(currentReq.status);

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      putProdReq({
        ...currentReq,
        title,
        category,
        description: detail,
        status: status,
      })
    );
    navigate("/");
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProdReq(currentReq));
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
          <img src="/assets/shared/icon-edit-feedback.svg" alt="" />
        </div>
        <Heading1 className="add-form__title">
          Editing {currentReq.title}
        </Heading1>
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
          <label htmlFor="status">Update Status</label>
          <Body1>Change Feature state</Body1>
          <select
            id="status"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="proposed">Proposed</option>
            <option value="planned">Planned</option>
            <option value="in-progress">In-Progress</option>
            <option value="live">Live</option>
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
          <Heading4 className="color-blue-gray ">Update Feedback</Heading4>
        </Button>
        <Button className="background-red" toRun={handleDelete}>
          <Heading4 className="color-blue-gray ">Delete Feedback</Heading4>
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
export default Editfeedback;
