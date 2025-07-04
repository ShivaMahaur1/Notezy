import React, { useState } from "react";

const QuizGenerator = () => {
  const [paragraph, setParagraph] = useState("");
  const [questions, setQuestions] = useState([]);
  const [fileName, setFileName] = useState("");

  // Dummy function to simulate generating questions
  const generateQuestions = () => {
    if (paragraph.trim()) {
      // Replace with your own logic for generating questions
      setQuestions([
        "What is the main idea of the paragraph?",
        "List two important points.",
        "Summarize the paragraph in your own words.",
      ]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
      // You can add logic to read file content here
    }
  };

  return (
    <div className="min-h-screen mt-5 rounded-2xl ml-10 bg-gradient-to-br w-300 from-blue-100 to-indigo-100 flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-indigo-700 mb-8 drop-shadow">
        Quiz Generator
      </h1>

      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: File Upload & Paragraph */}
        <div className="flex-1 p-8 flex flex-col">
          {/* File Upload */}
          <label className="mb-4 flex flex-col items-start">
            <span className="text-lg font-semibold text-gray-700 mb-2">
              Upload File
            </span>
            <input
              type="file"
              accept=".txt,.doc,.docx,.pdf"
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100
              "
              onChange={handleFileChange}
            />
            {fileName && (
              <span className="mt-2 text-xs text-gray-500">
                Selected: {fileName}
              </span>
            )}
          </label>

          {/* Paragraph Input */}
          <label className="flex-1 flex flex-col mt-6">
            <span className="text-lg font-semibold text-gray-700 mb-2">
              Enter Paragraph
            </span>
            <textarea
              className="resize-none border border-indigo-200 rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              placeholder="Paste or write your paragraph here..."
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
          </label>

          {/* Start Button */}
          <button
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow transition"
            onClick={generateQuestions}
          >
            Start
          </button>
        </div>

        {/* Right: Questions */}
        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-indigo-100 bg-indigo-50 p-8 flex flex-col">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Questions
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {questions.length === 0 ? (
              <span className="text-gray-400">No questions yet.</span>
            ) : (
              questions.map((q, idx) => <li key={idx}>{q}</li>)
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QuizGenerator;
