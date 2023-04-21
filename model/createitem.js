const database = require('./database.js');

async function createlist(received_data){
    let data = received_data.split('\r\n');
    let head = data[0].split('head=');
    let body = data[1].split('body=');
    head = head[1];
    body = body[1];
    await database.createitem(head, body);
}
module.exports = {createlist};