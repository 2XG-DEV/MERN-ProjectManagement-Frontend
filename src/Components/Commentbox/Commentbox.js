import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "..";
import { putProdReq } from "../../Actions/productReq.actions";
import { Body1, Heading3, Heading4 } from "../../Typography";
import "./Commentbox.css";

const Commentbox = ({ comment, replyingTo }) => {
  const productReqs = useSelector((state) => state.productReqs);
  const { productRequests } = productReqs;
  const params = useParams();
  const currentReq = productRequests.find((e) => e._id === params.id);

  const [charactersLeft, setCharactersLeft] = useState(250);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setContent(e.target.value);
    setCharactersLeft(250 - content.length);
  };

  const userId = useSelector((state) => state.userLogin.userInfo.user.id);
  const username = useSelector(
    (state) => state.userLogin.userInfo.user.username
  );

  const handlePost = () => {
    if (replyingTo) {
      console.log(replyingTo._id);
      currentReq.comments
        .find((c) => c._id === replyingTo._id)
        .replies.push({
          username: username,
          user: userId,
          content: content,
          replyingTo: comment.username,
        });
    } else if (comment) {
      currentReq.comments
        .find((c) => c._id === comment._id)
        .replies.push({
          username: username,
          user: userId,
          content: content,
          replyingTo: comment.username,
        });
    } else {
      currentReq.comments.push({
        username: username,
        user: userId,
        content: content,
      });
    }
    dispatch(putProdReq(currentReq));
    setContent("");
    setCharactersLeft(250);
  };
  return (
    <div className="commentbox">
      <Heading3 className="commentbox__title">
        {comment ? "Add Reply" : "Add Comment"}
      </Heading3>
      <textarea
        name="comment"
        id="comment"
        className="commentbox__input"
        placeholder="Type your comment here"
        onChange={handleInput}
        value={content}
        maxLength={251}
      ></textarea>
      <div className="commentbox__footer">
        <Body1>{charactersLeft} Characters left</Body1>
        <Button className="background-purple" toRun={handlePost}>
          <Heading4 className="color-blue-gray ">Post Comment</Heading4>
        </Button>
      </div>
    </div>
  );
};

export default Commentbox;
