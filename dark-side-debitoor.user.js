var head = document.head;
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'http://localhost:8080/darkside.css';
head.appendChild(link);

var body = document.body;
var script = document.createElement('script');
script.src = 'http://localhost:8080/script.js';
body.appendChild(script);

console.log('Welcome to the dark side of e-conomic and debitoor with scriptz');