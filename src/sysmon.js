import os, { userInfo } from 'os';
import { writeLog } from './adminlogs.js';
const cpuUsage = os.loadavg()[0];
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const usedMemory = totalMemory - freeMemory;
const users = os.userInfo();

async function monitorServerActivity() {
    console.log(`CPU Usage: ${cpuUsage}%`);
    console.log(`Memory Usage: ${usedMemory} bytes`);
    console.log(`Free Memory: ${freeMemory} bytes`);
    console.log(`Total Memory: ${totalMemory} bytes`);
    console.log(`Users: ${users.username}`);
    console.log('---------------------------');
    if (users.username != 'root') {
        console.log('Unauthorized user detected');
        console.log('Sending alert to admin');
        console.log('---------------------------');
    }

    if (cpuUsage > 80) {
        console.log('CPU usage is over 80%, consider optimization options');
    }

}

const sysInfo = {
    cpuUsage,
    totalMemory,
    freeMemory,
    usedMemory,
    users,
};

function userAuth(users) {
    if (users.username === 'root') {
        console.log('CLearNet Developements' + '\u00A9');
        console.log('SysMon BETA' + '\u00A9' + '2024');
    }
    else {
        console.log('Unauthorized user detected');
        console.log('Sending alert to admin');
    }
}

const activeScan = () => {
    console.log(os.userInfo());
    return users;
}

console.log(activeScan());

console.log(userAuth(users));
setInterval(monitorServerActivity, 3000);
setInterval(writeLog, 3000, 'users.json', sysInfo);


export { users, monitorServerActivity, sysInfo, userAuth, activeScan };
