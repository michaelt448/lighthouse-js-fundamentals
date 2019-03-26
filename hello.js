function sayHello(name){
  console.log("Hello, " + name) ;

}

sayHello("Caliban");
sayHello("Miranada");
sayHello("Ferdinand");

function returnSayHello(name) {
  return "Hello" + name;
}
var greeting = returnSayHello('John')
console.log(greeting);