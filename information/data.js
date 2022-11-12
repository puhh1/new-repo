const ratioOfTasks = new Map();
ratioOfTasks.set (1, '1) Нужен readme.');
ratioOfTasks.set (2, '2) Нужно описать Todo list.');
ratioOfTasks.set (3, '3) Выбор действия и далнейший перебор(Если выбор Нет, то вывод списка. Если Да, то предлагаем удалить дело).');
ratioOfTasks.set (4, '4) Удаление выбранного дела.');

console.log (ratioOfTasks)

module.exports = ratioOfTasks
