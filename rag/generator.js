import axios from "axios";

class Generator {
  async generate(responseData) {
    const context = responseData.join(", ");
    console.log("Sending context to API:", context); // Log the context
    const apiKey = "";
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: context }],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
      return "Error generating response.";
    }
  }
}

export default Generator;
