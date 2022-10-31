const moment = require('moment-timezone');
const execute = require('./execute');
function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

const controlUnit = async function(){
    const tuesday = 2;
    const hour = 14;
    while(1) {
        let now = moment.tz("Asia/Seoul").locale("en");
        console.log(`${now.day()} ${now.format('HHmm')}`);
        execute();
        await sleep(60000);
    }
}

controlUnit();