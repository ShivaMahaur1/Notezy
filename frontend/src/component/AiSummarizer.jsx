import React from "react";
import { getGeminiSummary } from "../utils/geminiApi";
import { useState } from "react";

function AiSummarizer() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");
    try {
      const data = await getGeminiSummary(
        `Summarize the following text:\n${input}`
      );
      setSummary(
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary FOund"
      );
    } catch (error) {
      setSummary("Error:" + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen ml-10 bg-blue-50 w-300 mt-5 rounded-2xl shadow-2xl flex flex-col items-center px-8">
      <h1 className="text-2xl text-blue-500 font-semibold mt-3 text-center mb-1">
        AI Summarizer
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Transform lengthy content into concise, actionable summaries
      </p>
      <div className="flex gap-6 w-full max-w-5xl">
        {/* Input Content Box */}
        <div className="bg-white h-120 rounded-xl shadow-md p-6 flex-1">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">📥</span> Input Content
          </h2>
          <div className="flex gap-2 mb-3">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-md px-4 py-2 text-sm font-medium flex items-center justify-center gap-2">
              <span>⬆️</span> Upload PDF
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-md px-4 py-2 text-sm font-medium flex items-center justify-center gap-2">
              <span>📄</span> Upload Text
            </button>
          </div>
          <textarea
            className="w-full h-60 border border-gray-200 rounded-md p-3 text-gray-700 text-sm resize-none mb-4"
            placeholder="Paste your lecture notes, articles, or any text content here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 rounded-md transition"
            onClick={handleSummarize}
            disabled={loading}
          >
            <span className="mr-2">✨</span>
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
        {/* AI Summary Box */}
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2 text-purple-500">✧</span> AI Summary
          </h2>
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            {summary ? (
              <div className="w-full text-gray-700 bg-blue-50 rounded p-4">
                <strong>Summary:</strong>
                <div>{summary}</div>
              </div>
            ) : (
              <>
                <span className="text-3xl mb-2">✨</span>
                <span>Your AI-generated summary will appear here</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiSummarizer;
