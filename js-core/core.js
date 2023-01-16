let isLogged =true;
let gameOver=false;
const isWaterwet=true;
console.log(isLogged,gameOver,isWaterwet)

let numDonuts=12;
numDonuts=false;
numDONUTS=129874536;//redclaring a a variable value

// strings, use consisted quotes

let firstName='Ziggy'
let bad="This is wrong"

console.log(typeof 87)

//when using strings inside other strings in js its important to have both single quotes and double quotes

let firstNameFace='Ziggy,"Ho he is a boy"'

//Strings are indexed, that is each character has a corresponding index

console.log("hello".length)
//every character is counted when talking of lenth
let mySong="Surfin'USA"
console.log(mySong[8])
//strings immutable

console.log(mySong[mySong.length-1])

//String Methods
//Methods are built in pieces of code to achieve something that come with a string.

//thing.method()

//toLowerCase method & toUpperCase
let msg='You are so grounded'
console.log(msg.toUpperCase())
console.log(msg.toLowerCase)

//Trim method 
let greeting ='     leave me a alone plz '
console.log(greeting.trim())
console.log(greeting.trim().toUpperCase())
//Trim only removes the leading and trailling spaces
//thing.method(arg)
// Some methods accept arguments that modify their behaviour. We pass these arguments inside of the parenthese.l

// let tvShow='catdog'

//indexOf method tells you the index of the starting string
// console.log(tvShow.indexOf('cat'),
// tvShow.indexOf('dog'),
// tvShow.indexOf('z'))
//Negative one (-1 ) is usually returned when the string looked or searched for in the string was not found

//slice method

//'baseball'.slice(4)
//'superhero'.slice(0/*starting index*/,5)

//replace method

//"baseball is entertaining".replace('entertaining','ok')

//replace only replaces the first occurence

//String Escapes
// \n -new line
// \' - single quote
// \" -double quote
//  \\ - backslash

//"he said I ain\'t happy"

//String template literals 
// Template literals  are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
// `I counted ${3+4} sheep `

//let animal='pig'
//let sound='oink'

//`${animal} says ${sound}`

// template strings example

let item='cucumbers'
let price=1.99;
let quantity=4;

//`You bought ${quantity} ${item}, total price : $${price*quantity}`

//Primitive types
//Null is the intentional absense of a value
let isLoggedIn=null;
//undefined is a variable that do not have assigned value are undefined
const u=undefined;

// Math Object
Math.PI//
Math.round(4.6)//rounding numbers
Math.floor(3.67)// removes the decimals
Math.pow(2,4)

Math.random();//Math.random generates random numbers
Math.random()*6
Math.floor(Math.random()*6)+1


//type of, we typeof to determine the type of a value
console.log(typeof isLogged)

//ParseInt, ParseFloat