
import os from 'os';

console.log('Operacinės sistemos reikalai');

// console.log('branduoliai', os.cpus());
console.log(os.homedir(), os.hostname(), os.platform(), os.type());
console.log(os.freemem(), os.totalmem(), os.uptime());
