const http = require('http');

http.get('http://localhost:8080/', res => {
  if (res.statusCode === 200) {
    console.log('OK');
    process.exit(0);
  } else {
    console.error('FAIL, status:', res.statusCode);
    process.exit(1);
  }
}).on('error', e => {
  console.error('ERROR', e.message);
  process.exit(1);
});
