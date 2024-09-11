require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  sslValidate: true,
});

app.use(express.json());

app.get('/api/views', async (req, res) => {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const database = client.db('portfolio');
    const views = database.collection('views');

    const result = await views.findOneAndUpdate(
      { _id: 'viewCount' },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );

    if (result && result.value) {
      res.json({ views: result.value.count });
    } else {
      res.json({ views: 1 }); // Default to 1 if no document was found/updated
    }
  } catch (error) {
    console.error("Database operation failed:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});