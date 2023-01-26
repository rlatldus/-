var title = 'book';
console.log(title); // book

var title = 'movie';
console.log(title); //movie

title = 'music';
console.log(title);//music


let title = 'book';
console.log(title); // book

let title = 'movie';
console.log(title); 
//Uncaught SyntaxError: Identifier 'title' has already been declared

title = 'music';
console.log(title);//music

const title = 'book';
console.log(title); // book

const title = 'movie';
console.log(title); 
//Uncaught SyntaxError: Identifier 'title' has already been declared

title = 'music';
console.log(title);
//Uncaught TypeError: Assignment to constant

var는 여러번 사용가능, let은 한번만 사용, const는 한가지만 사용가능