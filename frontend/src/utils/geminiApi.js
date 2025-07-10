// It's a good practice to keep the base URL in one place
const BASE_URL = "https://notezy-2.onrender.com"; // or use environment variable for flexibility

export async function getGeminiSummary(prompt) {
  const response = await fetch(`${BASE_URL}/api/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) throw new Error("Failed to fetch Summary");
  return response.json();
}

export async function getGeminiQuizQuestions(paragraph) {
  const response = await fetch(`${BASE_URL}/api/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: `Generate 5 quiz questions (with answers) based on the following text:\n${paragraph}`,
    }),
  });

  if (!response.ok) throw new Error("Failed to fetch Quiz Questions");
  return response.json();
}
