const url = 'http://mockbin.com/har';
const form = new FormData();
form.append('foo', 'bar');

const options = {method: 'POST'};

options.body = form;

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}