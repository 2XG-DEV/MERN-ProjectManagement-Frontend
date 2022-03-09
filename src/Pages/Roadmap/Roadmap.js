import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProdReqs } from "../../Actions/productReq.actions";
import { Button, Feedback } from "../../Components";
import {
  Body1,
  Body2,
  Body3,
  Heading1,
  Heading2,
  Heading4,
} from "../../Typography";
import "./Roadmap.css";

const Roadmap = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const requestList = useSelector((state) => state.productReqs);
  const { productRequests } = requestList;

  const [currentPage, setCurrentPage] = useState("planned");

  useEffect(() => {
    if (!userInfo) {
      nav("/login");
    }
    dispatch(getProdReqs());
  }, [nav, userInfo, dispatch]);

  return (
    <>
      <div className="roadmap__header">
        <div className="left">
          <Link to="/" className="text-decoration-none">
            <Button className="background-transparent ">
              <img src="/assets/shared/icon-arrow-left.svg" alt="" />
              <Body1 className="color-white hover-underline">Go back</Body1>
            </Button>
          </Link>
          <Heading2 className="color-white">Roadmap</Heading2>
        </div>
        <Link to="/add" className="text-decoration-none">
          <Button className="background-purple">
            <img src="./assets/shared/icon-plus.svg" alt="plus" />
            <Heading4 className="color-blue-gray ">Add Feedback</Heading4>
          </Button>
        </Link>
      </div>

      <div className="roadmap__select">
        <div
          className={`roadmap__select__option ${
            currentPage === "planned" && "active-btn"
          }`}
        >
          <button onClick={() => setCurrentPage("planned")}>
            <Body3>Planned</Body3>
          </button>
        </div>
        <div
          className={`roadmap__select__option ${
            currentPage === "in-progress" && "active-btn"
          }`}
        >
          <button onClick={() => setCurrentPage("in-progress")}>
            <Body3>In Progress</Body3>
          </button>
        </div>
        <div
          className={`roadmap__select__option ${
            currentPage === "live" && "active-btn"
          }`}
        >
          <button onClick={() => setCurrentPage("live")}>
            <Body3>Live</Body3>
          </button>
        </div>
      </div>

      <div className="roadmap__content">
        <Heading1>{currentPage}</Heading1>
        <Body2>
          {currentPage === "in-progress"
            ? "Features currently being developed"
            : currentPage === "live"
            ? "Features that are live right now"
            : "Features about to enter development stage"}
        </Body2>
        {productRequests.map((request) => {
          if (request.status === currentPage) {
            return <Feedback key={request._id} req={request} />;
          }
          return "";
        })}
      </div>
    </>
  );
};

export default Roadmap;
