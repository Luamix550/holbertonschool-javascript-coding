#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/:id'.replace(':id', id);

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }

  console.log(JSON.parse(body).title);
});
