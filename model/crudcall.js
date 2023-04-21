const crtitm = require('./createitem');
const rmvitem = require('./removeitem');
const updtitm = require('./updateitem');

// PROCESS WHICH CRUD TO CALL
async function crudcall(receieved_data){
    let eqlsplt = receieved_data.split('=');
    if(eqlsplt[1] == 'delt\r\n'){
        rmvitem.rmvitem(eqlsplt[0]);
    }
    if(eqlsplt[0] == 'head'){
        crtitm.createlist(receieved_data);
    }
    if(eqlsplt[0] == 'edithead'){
        updtitm.updateitem(receieved_data);
    }
}
module.exports = {crudcall}