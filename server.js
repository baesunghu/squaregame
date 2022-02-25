const func = require('./main.js');
const jsdom = require('mocha-jsdom');
global.document = jsdom({url: "https://shan.loca.lt/sign_up.html"});


asdf=[]
console.log(func.sign_up(new Array,new Array,asdf))