import React, { useState } from "react";
import { getGeminiQuizQuestions } from "../utils/geminiApi";

const QuizGenerator = () => {
  const [paragraph, setParagraph] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!paragraph.trim()) return;
    setLoading(true);
    setQuestions([]);
    try {
      const data = await getGeminiQuizQuestions(paragraph);
      // Gemini returns a string, split into questions if needed
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      // Try to split into questions (handles numbered or bulleted lists)
      const quizList = text
        .split(/\n+/)
        .map(q => q.trim())
        .filter(q => q.length > 0);
      setQuestions(quizList);
    } catch (error) {
      setQuestions([`Error: ${error.message}`]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen mt-5 rounded-2xl ml-10 bg-gradient-to-br w-300 from-blue-100 to-indigo-100 flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-indigo-700 mb-8 drop-shadow">
        Quiz Generator
      </h1>

      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Paragraph Input */}
        <div className="flex-1 p-8 flex flex-col">
          <label className="flex-1 flex flex-col mt-6">
            <span className="text-lg font-semibold text-gray-700 mb-2">
              Enter Paragraph
            </span>
            <textarea
  className="resize-none border border-indigo-200 rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
  placeholder="Paste or write your paragraph here..."
  value={paragraph}
  onChange={(e) => setParagraph(e.target.value)}
  rows={4}
  style={{ overflow: "hidden" }}
  onInput={e => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }}
/>
          </label>

          {/* Start Button */}
          <button
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow transition"
            onClick={generateQuestions}
            disabled={loading}
          >
            {loading ? "Generating..." : "Start"}
          </button>
        </div>

        {/* Right: Questions */}
        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-indigo-100 bg-indigo-50 p-8 flex flex-col">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Questions
          </h2>
                <ol className="space-y-4">
        {questions.length === 0 ? (
          <span className="text-gray-400">No questions yet.</span>
        ) : (
          questions.map((q, idx) => {
            // Try to split question and answer if possible
            const [question, answer] = q.split(/(?:Answer:|A:)/i);
            return (
              <li key={idx} className="bg-white rounded-lg shadow p-3">
                <span className="font-semibold text-indigo-700">
                  {question ? question.trim() : q}
                </span>
                {answer && (
                  <div className="mt-1 text-green-700 font-medium">
                    Answer: {answer.trim()}
                  </div>
                )}
              </li>
            );
          })
        )}
      </ol>
        </div>
      </div>
    </div>
  );
};

export default QuizGenerator;