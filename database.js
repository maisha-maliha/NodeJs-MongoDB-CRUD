const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://0.0.0.0:27017"; // use 0.0.0.0 instead of localhost caz that gave error.

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('bookstore');
    const books = database.collection('books');

    // Query for a movie that has the title 'Back to the Future'
    const query = { rating: 10 };
    const book = await books.findOne({author: "paulo"}, {rating: 1});
    console.log(book);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);