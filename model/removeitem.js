const database = require('./database');

// REMOVE ITEM FORM DATABASE
async function rmvitem(received_data){
    database.del_item(received_data);
}

module.exports = {rmvitem}