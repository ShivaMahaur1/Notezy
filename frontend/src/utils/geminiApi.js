export async function getGeminiSummary(prompt){
    const response = await fetch("http://localhost:5000/api/gemini",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({prompt}),
    })

    if (!response.ok) throw new Error ("Failed to fetch Summary")
        return response.json()
}