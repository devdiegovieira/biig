const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:admin@cluster0.b3s1emd.mongodb.net/?retryWrites=true&w=majority';

const openConnection = async () => {

  const client = new MongoClient(uri , { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  return client.db('biig');
}

module.exports = { openConnection }