#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }

  const tasks = JSON.parse(body);
  const completedTasks = tasks.filter((task) => task.completed === true);
  const completedTasksByUserId = {};
  completedTasks.forEach((task) => {
    const userId = task.userId;
    if (completedTasksByUserId[userId]) {
      completedTasksByUserId[userId]++;
    } else {
      completedTasksByUserId[userId] = 1;
    }
  });

  console.log(completedTasksByUserId);
});
