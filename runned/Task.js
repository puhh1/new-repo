const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Вы сделали задание?', first_answer => {

    if (first_answer = 1) {
        readline.question('Хотите убрать его из списка?',
                second_answer => {
            if (second_answer = 1) {
                
            }
                });
    }
    else {
        console.log('0');
    }
    readline.close();
});
module.exports = readline;