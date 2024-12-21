import RAGSystem from "./ragSystem.js";

const sampleData = [
  "ChatGPT is a language model.",
  "RAG systems combine retrieval and generation.",
  "This is a test document for RAG.",
];

const ragSystem = new RAGSystem(sampleData);

const query = "RAG systems";
const response = ragSystem.handleQuery(query);

console.log(response); // Expected output: Here is the information you requested: RAG systems combine retrieval and generation.
