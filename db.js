const { MongoClient } = require('mongodb')

let dbConnection
let onlineUri = 'mongodb+srv://devsawe:devsawe@bookstore.2wns8vs.mongodb.net/?retryWrites=true&w=majority'
let localUri = 'mongodb://127.0.0.1:27017/bookstore'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(onlineUri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}