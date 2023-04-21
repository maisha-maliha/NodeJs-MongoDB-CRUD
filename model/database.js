const { MongoClient } = require("mongodb");
const fs = require('fs');
// Replace the uri string with your connection string.
const uri = "mongodb://0.0.0.0:27017"; // use 0.0.0.0 instead of localhost caz that gave error.
const client = new MongoClient(uri);
client.connect();
// RUN 
// async function run() {
//   try {
//     await makejson();
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// CREATE JSON FILE
async function makejson(){
  let coll = await client.db('todo').collection('item').find().toArray();
  let data = `[`;
  coll.forEach(item => {data += `{ "title": "${item.title}", "content" : "${item.content}", "id": "${item._id}" },`;});
  data += '{}]';
  fs.writeFile('./view/data.json', data, (err)=>{if(err) throw err});
}
makejson(); // CALL ONCE TO CREATE JSON FILE
// ADD ITEM TO COLLECTION
async function createitem(head, body){
  let coll = await client.db('todo').collection('item');
  await coll.insertOne({
      title:`${head}`,
      content:`${body}`
  });
  console.log("item created");
  makejson();
}
async function del_item(id){
  let coll = await client.db('todo').collection('item');
  await coll.deleteOne({_id : `${id}`});
  console.log("item deleted");
  makejson();
}
// run().catch(console.dir);
module.exports = {createitem};