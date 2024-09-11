const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.use(express.json());

app.get('/api/views', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('portfolio');
    const views = database.collection('views');

    const result = await views.findOneAndUpdate(
      { _id: 'viewCount' },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );

    res.json({ views: result.value.count });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});