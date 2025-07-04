import React, { useState } from "react";
import { LuBrain } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const LeftSidebar = () => {
  
  return (
    <div className="flex min-h-screen">
      <div className="w-75 mt-4 rounded-2xl shadow-2xl h-screen bg-white px-6 py-4">
        {/* Section Title */}
        <div className="text-lg text-gray-600 font-semibold mb-2 tracking-wide">
          STUDY TOOLS
        </div>

        {/* Tools List */}
        <div className="flex flex-col pt-5 gap-4 mb-6">
        
        <Link to="/ai">
         <button
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
           
          >
            <span className="text-blue-600">
              {/* AI Icon */}
              <LuBrain size={25} />
            </span>
            AI Summarizer
          </button>
          </Link>
          
          <Link to="/quiz">
          <button
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
           
          >
            <span className="text-purple-500">
              {/* Quiz Icon */}
              <FaRegQuestionCircle size={25} />
            </span>
            Quiz Generator
          </button>
          </Link>

          
        </div>

        {/* Study Stats */}
        <div className="bg-blue-50 h-40 rounded-xl px-4 py-3">
          <div className="text-xl text-gray-400 font-semibold mb-2">
            Study Stats
          </div>
          <div className="flex flex-col gap-1">
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Quizzes Generated</span>
              <span className="font-semibold text-gray-800">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Study Hours</span>
              <span className="font-semibold text-gray-800">48</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LeftSidebar;
