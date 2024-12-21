class Retriever {
  constructor(data) {
    this.data = data; // Array of documents
  }

  retrieve(query) {
    // Simple keyword matching for demonstration
    const results = this.data.filter((doc) =>
      doc.toLowerCase().includes(query.toLowerCase())
    ); // Case-insensitive matching
    console.log("Retrieved documents:", results); // Log the retrieved documents
    return results;
  }
}

export default Retriever;
