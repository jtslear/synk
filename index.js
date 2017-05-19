'use strict';

exports.http = (request, response) => {
  console.log('http');
  response.status(200).send('Hello World!');
};
