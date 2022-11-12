const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Вы сделали задание', answer => {

    if (answer = 1) {
        console.log('Моло');
    } else if (answer != 1) {
        console.log('Добрый день');
    }
    readline.close();
});
module.exports = readline;