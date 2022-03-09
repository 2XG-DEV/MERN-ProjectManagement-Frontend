import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Body2, Body3, Heading4 } from "../../Typography";
import Commentbox from "../Commentbox/Commentbox";
import "./Comment.css";

const Comment = ({ replyingTo, comment }) => {
  const [showBox, setShowBox] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const getDetails = async () => {
      const config = {
        headers: {
          "x-auth-token": `${userInfo.token}`,
        },
      };
      const { data: response } = await axios.get(
        `/users/${comment.username}`,
        config
      );

      setUserDetails(response);
    };
    getDetails();
  }, [comment.username, userInfo.token]);
  return (
    <div className="comment">
      <div className="comment__header">
        <img src={userDetails.image} alt="" />
        <div className="comment__naming">
          <Heading4>{userDetails.name}</Heading4>
          <Body3 className="opacity-1">{`@${comment.username}`}</Body3>
        </div>
        <button
          className="reply-btn"
          onClick={() => {
            setShowBox(!showBox);
          }}
        >
          Reply
        </button>
      </div>
      <Body2 className="opacity-1">
        {comment.replyingTo && (
          <span className="comment__replyingto">@{comment.replyingTo} </span>
        )}
        {comment.content}
      </Body2>
      {showBox && <Commentbox replyingTo={replyingTo} comment={comment} />}
      {comment.replies && (
        <div className="replies">
          {comment.replies.map((r) => {
            return <Comment key={r._id} replyingTo={comment} comment={r} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
