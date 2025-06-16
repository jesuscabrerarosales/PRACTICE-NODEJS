const os = require('node:os')


console.log('OS')
console.log('-------------------------')
// console.log(os.cpus())
console.log(os.platform())
console.log(os.hostname())
console.log(os.uptime()/60/60)
