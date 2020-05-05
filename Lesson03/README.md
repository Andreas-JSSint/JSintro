# Functions
## Creation
There are different ways to create a function 
+ function declaration 
+ function expression

Declarations can be calles anytime, expressions must be created before calling the expression  

#### Declaration 
```javascript
function sayMyName (name){
    console.log(`Hello my name is ${name}!`)
};

// Will log "Hello, my name is Thoralf!"
sayMyName("Thoralf");
```
also works
```javascript
// Will log 'Hello, my name is Thoralf!'
sayMyName('Thoralf');

function sayMyName (name){
    console.log(`Hello my name is ${name}!`)
};
```

#### Expression 
```javascript
const speakOut  = function(name){
    console.log(`Hello my name is ${name}!`)
};
// Will log 'Hello, my name is Thoralf!'
speakOut('Thoralf');
```
will NOT work
```javascript
// Will log 'speakOut is not fedined...'
speakOut('Thoralf');

const speakOut  = function(name){
    console.log(`Hello my name is ${name}!`)
};
```

## Default argument values
It is possible to give the arguments of a function a default value, so that everytime something is passed
```javascript
function sayMyName (name = "Ushi"){
    console.log(`Hello my name is ${name}!`)
};

// Will log "Hello, my name is Ushi!"
sayMyName();

// Will log "Hello, my name is Thoralf!"
sayMyName("Thoralf");
```

## Return values
Functions can return anything, but also only one variable
```javascript
function minToSec (minutes = 0){
    const returnBack = minutes*60;
    return returnBack;
};

const seconds = minToSec(5);

// Will log "300s"
console.log(seconds + "s");
```

## Arrow functions
Arrow functions are a shorter and more effective way to write functions.
For example if we have a function expression we do not have to use the keyword **function** to create the function

```javascript
const minToSec = (minutes) => {
    const returnBack = minutes*60;
    return returnBack;
};

// Will log "300s"
console.log(minToSec(5) + "s");
```
We can even get rid of the first pair of brackets if there is only one argument to the function and the keyword **return** if the function consists of only one return line of code

```javascript
const minToSec = minutes => minutes*60;

// Will log "300s"
console.log(minToSec(5) + "s");
```

## Callback functions
Callback functions is just a fancy way of saying "The last thing a function does when called is calling another function". 
In the following a first function is created with the first argument beeing also a function. Now we can create a second functuion and pass that to the first one.
The first one calls the second one now!

```javascript
function writeAll(callBackFunc) {
    console.log("The calculated seconds are:")
    const seconds = 5;
    callBackFunc(seconds);
}

const minToSec = minutes => console.log(minutes*60);

// Will log "300s"
writeAll(minToSec);
```

## Call by reference and call by value
In Lesson02 we have learned about the different data types. We learned that we overall have two different types, the primitive and the non-primitive data type. We could also call the the two different types value type and reference type. To do a quick recap:

* **Primitive / value types**
  * String
  * Number
  * Bool 
  * undefined
* **Non-Primitive / reference types**
  * Objects
  * Functions

Value types will always create their own instance in storage wehere as reference types only refer to an adress in the storage.

Example for value type:
```javascript
let x = 5;
let y = x;
y = 10;

//Will log "x=5 and y=10"
console.log("x=" + x +" and y=" + y);
```

Example for reference type:
```javascript
let x = {value: 5};
let y = x;
y.value = 10;

//Will log "x=10 and y=10"
console.log("x.value=" + x.value +" and y.value=" + y.value);
```

For function calls it does not matter how i declare the function, what matters is what kind of argument the function is given! If i give the function a value type the value will be copied into the function but will not affect the original value. If the function is given a reference type, it will effect the original value.

```javascript
function addOne (number){
    if(number.value)
        number.value++;
    if(!number.value)
        number++;
}

const x = {value: 10};
const y = 10;

addOne(x.value);
addOne(y);

//Will log "x=11 and y=10"
console.log("x.value=" + x.value +" and y=" + y);
```
Also works with arrays as reference

```javascript
function raise (number){
       number[0]++;
}
const x = {value: [10]};
raise(x.value);

//Will log "[11]"
console.log(x.value);
```