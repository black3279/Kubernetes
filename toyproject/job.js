const moment = require('moment-timezone');
const execute = require('./execute');

const controlUnit = async function(){
    // const tuesday = 2;
    // const hour = 14;
    let now = moment.tz("Asia/Seoul").locale("en");
    console.log(`${now.day()} ${now.format('HHmm')}`);
    execute();
}

controlUnit();