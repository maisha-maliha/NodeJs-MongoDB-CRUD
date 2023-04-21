const database = require('./database');

async function rmvitem(receieved_data){
    database.del_item(receieved_data);
}