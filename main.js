const Task = require('./information/data.js');

const suitsOfCards = require('./information/tasks');

const task = new Task(tasks);
const sortTask = task.task();