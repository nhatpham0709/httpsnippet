const fetch = require('node-fetch');

const url = 'http://mockbin.com/har';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-foo': 'Bar', 'x-bar': 'Foo'}
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}