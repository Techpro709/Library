console.log("Script.js is running");

var books = [{id:1234,name:"test1"},{id:4321,name:"test2"},{id:1000,name:"test3"}];

const books2 = books.map(item => {    console.log( item.id + " "+ item.name)});
//console.log(books2);
