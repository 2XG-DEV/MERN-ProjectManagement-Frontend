import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProdReqs } from "../../Actions/productReq.actions";

import { Heading2 } from "../../Typography";
import Feedback from "../Feedback/Feedback";

const FeedbackListComponent = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const requestList = useSelector((state) => state.productReqs);
  const { productRequests } = requestList;

  const { filters } = useSelector((state) => state.filters);

  useEffect(() => {
    if (!userInfo) {
      nav("/login");
    }
    dispatch(getProdReqs());
  }, [nav, userInfo, dispatch]);

  return (
    <div className="feedback-list">
      {productRequests.length > 0 ? (
        filters.includes("All") ? (
          productRequests.map((request) => {
            return <Feedback key={request._id} req={request} />;
          })
        ) : (
          productRequests.map((request) => {
            if (filters.includes(request.category))
              return <Feedback key={request._id} req={request} />;
            return "";
          })
        )
      ) : (
        <Heading2>No Feedbacks</Heading2>
      )}
    </div>
  );
};

export default FeedbackListComponent;
