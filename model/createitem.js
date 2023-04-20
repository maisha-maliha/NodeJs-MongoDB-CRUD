const database = require('./database.js');

async function editres(reciveddata){
    let data = reciveddata.split('&');
    let head = data[0].split('=');
    let body = data[1].split('=');
    head = head[1].split('+').join(' ');
    body = body[1].split('+').join(' ');
    await database.createitem(head, body);
}

module.exports = {editres};