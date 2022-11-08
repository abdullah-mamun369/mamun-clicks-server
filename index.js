const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { query } = require('express');
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Photography server is running')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@assignment11.rfnwvyu.mongodb.net/?retryWrites=true&w=majority`;

// console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

    }

    finally {

    }
}

run().catch(err => console.log(err));





app.listen(port, () => {
    console.log(`Server is running in port number ${port}`);
})










// sample=========================
// async function run() {
//     try {
//         const userCollection = client.db('photography').collection('users');

//         const serviceCollection = client.db('photography').collection('services');

//         app.get('/users', async (req, res) => {
//             const query = {};
//             const cursor = userCollection.find(query);
//             const users = await cursor.toArray();
//             res.send(users);
//         });

//         app.get('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: ObjectId(id) };
//             const user = await userCollection.findOne(query);
//             res.send(user);
//         })

//         app.post('/users', async (req, res) => {
//             const user = req.body;
//             console.log(user);
//             const result = await userCollection.insertOne(user)
//             res.send(result)
//         });

//         app.post('/services', async (req, res) => {
//             const user = req.body;
//             console.log(user);
//             const result = await serviceCollection.insertOne(user)
//             res.send(result)
//         });

//         app.put('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: ObjectId(id) };
//             const user = req.body;
//             const option = { upsert: true };
//             const updatedUser = {
//                 $set: {
//                     name: user.name,
//                     address: user.address,
//                     email: user.email
//                 }
//             }
//             const result = await userCollection.updateOne(filter, updatedUser, option);
//             res.send(result);
//         })

//         app.delete('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             // console.log('Trying to delete', id);
//             const query = { _id: ObjectId(id) }
//             const result = await userCollection.deleteOne(query);
//             console.log(result);
//             res.send(result);

//         })
//     }

//     finally {

//     }
// }

// run().catch(err => console.log(err));
