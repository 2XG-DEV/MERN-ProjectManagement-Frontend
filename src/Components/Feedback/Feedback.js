import React from "react";
import { Link } from "react-router-dom";
import { Body1, Body2, Body3 } from "../../Typography";
import "./Feedback.css";

const Feedback = ({ req }) => {
  return (
    <div className="feedback">
      <Body3 className="feedback__title">{req.title}</Body3>
      <Body2 className="feedback__description">{req.description}</Body2>
      <Body3 className="feedback__category">
        {req.category.charAt(0).toUpperCase() + req.category.slice(1)}
      </Body3>
      <div className="feedback__details">
        <div className="feedback__upvotes">
          <img src="/assets/shared/icon-arrow-up.svg" alt="" />
          <Body3>{req.upvotes}</Body3>
        </div>
        <Link to={`/requests/${req._id}`} className="text-decoration-none">
          <div className="feedback__commAmn">
            <img src="/assets/shared/icon-comments.svg" alt="" />
            <Body3 className="feedback__commAmn">{req.comments.length}</Body3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
