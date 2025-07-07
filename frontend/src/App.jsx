import { useState } from "react";

import "./App.css";
import Navbar from "./component/Navbar";
import LeftSidebar from "./component/LeftSidebar";
import AiSummarizer from "./component/AiSummarizer";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import QuizGenerator from "./component/QuizGenerator";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex sm:">
      <LeftSidebar />
      <Routes>
        <Route path="/" element={<AiSummarizer/>} />
        <Route path="/ai" element={<AiSummarizer/>} />
        <Route path="/quiz" element={<QuizGenerator/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
