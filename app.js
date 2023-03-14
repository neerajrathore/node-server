// let mongodb = require("mongodb").MongoClient

// mongodb.connect('www.googoler.ocvn', function( err , some) {
//     console.log(err, some);
// })

// ******************** streams in node

const express = require('express');
const bodyParser = require('body-parser');

// const mongoConn = require('./db/mongoDb')

const product = require('./routes/product.routes')

const app = express();

// middlewarer
const json = app.use(express.json())

const MongoClient = require("mongodb").MongoClient
async function main() {
    return new Promise((resolve, reject)=>{
        console.log("here in file");
        // const url = "mongodb://localhost:27017/";
        // const url= "mongodb+srv://souresh:singodiya@cluster0.eehfp.mongodb.net/test";
        const url= "mongodb+srv://testadmin:sadmin@cluster0.kxr0hdx.mongodb.net/test";

        // const client = new MongoClient(url);

        MongoClient.connect(url, (err, database)=>{
            if(err){
                console.log("1. Error")
                resolve('errrrrrrr')
            }else{
                database.db("BlogCrud").collection("employees")
                .find()
                .toArray((err,data)=>{
                    if(err){
                        console.log('2. error')
                        resolve('errrr')
                    }else{
                        console.log("Connecting to MongoDB")
                        resolve(data)
                    }
                })
            }
        })
    })
}
app.get('/', async(req,res)=>
{
    let result = await main();
    res.send(result) 
})

let port = 1234;
app.listen(port, () => {
    console.log("server is up and running" + port );
})
