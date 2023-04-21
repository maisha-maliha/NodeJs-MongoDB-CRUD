const database = require('./database.js');

async function updateitem(received_data){
    let data = received_data.split('\r\n');
    let head = data[0].split('edithead=');
    let body = data[1].split('editbody=');
    let id = data[2].split('id=');
    head = head[1];
    body = body[1];
    id= id[1];
    await database.updateitem(head, body,id);
}
module.exports = {updateitem};