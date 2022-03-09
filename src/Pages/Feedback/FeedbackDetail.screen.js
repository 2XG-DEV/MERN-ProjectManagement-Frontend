import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Feedback } from "../../Components";
import Commentbox from "../../Components/Commentbox/Commentbox";
import CommentSection from "../../Components/CommentSection/CommentSection";
import { Body1, Heading4 } from "../../Typography";
import "./Feedback.screen.css";

const FeedbackDetail = () => {
  const productReqs = useSelector((state) => state.productReqs);
  const { productRequests } = productReqs;
  const params = useParams();
  const currentReq = productRequests.find((e) => e._id === params.id);

  return (
    <>
      <div className="detail__header">
        <Link to="/" className="text-decoration-none">
          <Button className="background-transparent ">
            <img src="/assets/shared/icon-arrow-left.svg" alt="" />
            <Body1 className="color-gray-blue hover-underline">Go back</Body1>
          </Button>
        </Link>
        <Link
          className="text-decoration-none"
          to={`/requests/edit/${currentReq._id}`}
        >
          <Button className="background-blue">
            <Heading4 className="color-blue-gray ">Edit Feedback</Heading4>
          </Button>
        </Link>
      </div>
      <Feedback req={currentReq} />
      <CommentSection comments={currentReq.comments} />
      <Commentbox prodReq={currentReq} />
    </>
  );
};

export default FeedbackDetail;
