import Retriever from "./retriever.js";
import Generator from "./generator.js";

class RAGSystem {
  constructor(data) {
    this.retriever = new Retriever(data);
    this.generator = new Generator();
  }

  async handleQuery(query) {
    console.log("Received query:", query); // Log the received query
    const retrievedDocs = this.retriever.retrieve(query);
    return await this.generator.generate(retrievedDocs);
  }
}

export default RAGSystem;
