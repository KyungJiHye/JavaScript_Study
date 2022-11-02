function Dog(name) {
  this.name = name;
}

function Cat(name) {
  this.name = name;
}

const lucy = new Dog('Lucy');

const maxx = new Cat('Maxx');

console.log(lucy, lucy instanceof Dog);
console.log(maxx);





function hello() {
  return 'hello, World';
  //return; // = return undefined랑 같은 뜻
}

const fn = hello,
  obj = {fn : hello},
  a = [hello];

console.log(fn);
console.log(obj);
console.log(a);



(function helloWorld() {
  console.log('Hello, World');
})();

//helloWorld();