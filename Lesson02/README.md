# Variables

This part gives a quick overview over the different variable types.

### Keywords
There are three different keywords to declare a variable
* var
* let
* const 

### Declaration  
**var** and **let** define variables and **const** defines a constant
* Variables can be changed
* Constants remain the same
  
```javascript
var lyric01 = "who";
let lyric02 = "let the";
const lyric03 = "dogs out";

console.log(lyric01, lyric02, lyric03)
// will log "who let the dogs out"

lyric01 = "who";
lyric02 = "who who";
// will work with no Error

lyric03 = "who who";
//will log "Uncaught TypeError: Assignment to constant variable."
```
### Redefine
* **var** can get redefined 
* **let** and **const** can not get redefined

```javascript
var lyric01 = "near far";
console.log(lyric01)
// will log "near far"

var lyric01 = "wherever you are";
console.log(lyric01)
// will log "wherever you are"

/*----------------------*/

let lyric02 = "near far";
console.log(lyric02)
// will log "near far"

let lyric02 = "wherever you are";
console.log(lyric02)
// will log "Identifier 'lyric02' has already been declared"

/*----------------------*/

const lyric03 = "near far";
console.log(lyric03)
// will log "near far"

const lyric03 = "wherever you are";
console.log(lyric03)
// will log "Identifier 'lyric03' has already been declared"

```

### Scope
**var** has a global scope , **let** and **const** have a block scope

```javascript
function lyricFunction01() {
    var lyric01 = "Mana Mana";    
    console.log(lyric01);    

    if (true) {
        var lyric01 = "Babdi bidi bi";
        console.log(lyric01);
    }    
    console.log(lyric01);    
}

lyricFunction01();
//  Will log following:
//  "Mana Mana"
//  "Babdi bidi bi"
//  "Babdi bidi bi"

/*----------------------*/

function lyricFunction02() {
    let lyric02 = "Mana Mana";    
    console.log(lyric02);    

    if (true) {
        let lyric02 = "Babdi bidi bi";
        console.log(lyric02);
    }    
    console.log(lyric02);    
}

lyricFunction02();
//  Will log following:
//  "Mana Mana"
//  "Babdi bidi bi"
//  "Mana Mana"

/*----------------------*/

function lyricFunction03() {
    const lyric03 = "Mana Mana";    
    console.log(lyric03);    

    if (true) {
        const lyric03 = "Babdi bidi bi";
        console.log(lyric03);
    }    
    console.log(lyric03);    
}

lyricFunction03();
//  Will log following:
//  "Mana Mana"
//  "Babdi bidi bi"
//  "Mana Mana"
```

### Data types
There are different data types you can "fill" the keywords with. Basically they are divided in two different groups

* Primitive types (only one value)
  * String
  * Number
  * Bool 
  * undefined
* Non-Primitive types (can contain more complex data)
  * Objects
  * Functions

You can check a data type of a variable with the function ```typeof()``` 

#### Primitive type
```javascript
    const stringType = "This is a string."; //typeof() gives back -> string
    const numberType = 0815; //typeof() gives back -> number
    const boolType = true; //typeof() gives back -> bool
    const undefinedType = undefined; //typeof() gives back -> undefined
```

#### Non-Primitive type
```javascript
    const array_00 = [1,2,"string", true, false]; 
    //typeof() gives back -> object

    const object_00 = {first: "1", other:"two", hello: true } 
    //typeof() gives back -> object

    const fucntionType = function greeting(param01, param02) { 
        console.log(param01,param02) 
    }; 
    //typeof() gives back -> function
```
