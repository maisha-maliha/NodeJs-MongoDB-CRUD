const database = require('./database.js');

async function createlist(received_data){
    console.log(received_data);
    let data = received_data.split('\r\n');
    console.log(data);
    let head = data[0].split('head=');
    let body = data[1].split('body=');
    head = head[1];
    body = body[1];
    console.log(head , body);
    await database.createitem(head, body);
}

module.exports = {createlist};