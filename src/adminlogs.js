import fs from 'fs';
import path from 'path';
import { users } from './sysmon.js';

export function writeLog() {
    const now = new Date();
    const formattedTimestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const userInfo = {
        username: users.username,
        uid: users.uid,
        gid: users.gid,
        home: users.homedir,
        shell: users.shell,
        timestamp: formattedTimestamp
    };

    fs.appendFile('users.json', JSON.stringify(userInfo, null, 2) + ',\n', (err) => {
        if (err) {
            console.error('Error logging user information:', err);
        } else {
            console.log('User information logged successfully.');
        }
    });
}


//module.exports = writeLog();

