const express = require('express');
const cors = require('cors');
const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
           .then((client) => {
            const db = client.db('banana_counter')
            const instructorCollection = db.collection('instructor')
            const instructorRouter = createRouter(instructorCollection)

            const reporterCollection = db.collection('reporter')
            const reporterRouter = createRouter(reporterCollection)

            const placeholderCollection = db.collection('placeholder')
            const placeholderRouter = createRouter(placeholderCollection)

            app.use('/api/instructor', instructorRouter)
            app.use('/api/reporter', reporterRouter)
            app.use('/api/placeholder', placeholderRouter)
       
           })
           .catch(console.error)

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
    });
