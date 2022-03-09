import React from "react";

import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./Pages/SignUp/SignUp";
import FeedbackList from "./Pages/FeedbackList/FeedbackList.screen.js";
import AddFeedback from "./Pages/AddFeedback/AddFeedback.screen";
import FeedbackDetail from "./Pages/Feedback/FeedbackDetail.screen.js";
import Editfeedback from "./Pages/EditFeedback/Editfeedback.page";
import Roadmap from "./Pages/Roadmap/Roadmap";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add" element={<AddFeedback />} />
          <Route path="/requests/:id" element={<FeedbackDetail />} />
          <Route path="/requests/edit/:id" element={<Editfeedback />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/" element={<FeedbackList />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
