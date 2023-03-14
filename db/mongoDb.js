const MongoClient = require("mongodb").MongoClient
console.log(MongoClient, "asas");

let dbConnection;
let dbCollection;

function addData () {
    dbCollection.insertOne({listing_url: "some"}).then(() => {
        console.log("inserted data");
    })
}

async function main() {
    return new Promise((resolve, reject)=>{
        // const url = "mongodb://localhost:27017/";
        // const url= "mongodb+srv://souresh:singodiya@cluster0.eehfp.mongodb.net/test";
        const url= "mongodb+srv://testadmin:sadmin@cluster0.kxr0hdx.mongodb.net/test";
        // const client = new MongoClient(url);

        MongoClient.connect(url, (err, database)=>{
            if(err){
                console.log("1. Error")
                resolve('errrrrrrr')
            }else{
                dbConnection = database.db("sample_airbnb");
                dbCollection = dbConnection.collection("listingsAndReviewss")
                .find()
                .toArray((err,data)=>{
                    if(err){
                        console.log('2. error')
                        resolve('errrr')
                    }else{
                        console.log("Connecting to MongoDB please")
                        console.log(data);
                         resolve(data)
                        // addData();
                    }
                })
            }
        })
    })

    // createListing(client, {
    //     name: "Lovely Loft",
    //     summary: "A charming loft in Paris",
    //     bedrooms: 1,
    // })
}

// main();

// function createListing(client, newListing) {
//     console.log("here")
//     const result = client.db("testDb").collection("listingsAndReviews").insertOne(newListing)
//     console.log(result);
// })

main();
exports.mongoConn = main;