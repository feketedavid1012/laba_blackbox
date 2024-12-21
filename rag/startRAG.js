import RAGSystem from "./ragSystem.js";
import readline from "readline";

const sampleData = [
  "ChatGPT is a powerful AI language model.",
  "RAG systems combine retrieval and generation techniques.",
  "This document serves as a test for the RAG system.",
  "What is ChatGPT?",
  "Explain the RAG system.",
];

const ragSystem = new RAGSystem(sampleData);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = async () => {
  rl.question("Enter your query: ", async (query) => {
    const response = await ragSystem.handleQuery(query);
    console.log(response);
    askQuestion(); // Ask for another query
  });
};

askQuestion(); // Start the query loop
