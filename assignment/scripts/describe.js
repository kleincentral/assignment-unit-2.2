// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First it creates a name variable containing 'Dane'
// then it creates and if statement, if name == 'Mary' it will give a personal console log message for her.
// Since the name variable is not 'Mary' and instead 'Dane' it will give a general console log message of 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First there is a blank variable created called secret, and a code variable labed as 123
// then in the if statement if code is === 123 meaning equal in type and value, which it is.
// in the if statement secret is set to 'super' and code is multiplied by 2 to equal 246.
// The last statement goes off and since code is not greater than 250 nothing happens.
// the console log pastes what secret is set to, 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// three variables are declared, isStudent which is true, age which is 34, and zip which is 55407
// then a large if statement is read, the first statement is not true since zip is less than 80000
// the second one is false since student is true and age is greater than 30
// the third is true so the console log will say 'Welcome to Prime!'
// the last else parameter is never reached since the code quits out before then.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorOne is not blue, try swapping around colorOne and colorTwo since they are opposite

if (mix === true) {
  colorOne = 'purple';
}
// FIX - colorOne is only set to purple, another statement is needed to set colorTwo as purple 
// such as colorTwo = 'purple';

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
// FIX - This simply asks an or statement instead of and like we want. So if temp is less than 39 but time is
// greater than 4 the statement still goes through when it shouldn't. Instead of using || inside the if's
// parameters use &&, example: if (temp > 39 && time >= 4)

*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// FIX - Right now the code is giving the no entry console log when the parameters are met rather than the console
// log of enter like it should. There are two possible fixes, one of which is trading the console.log of the if and
// else statements, the other is changing the if statement, example: if(minAge > age)
// Although this is not the best way, since this allows for a console.log of enter if age is not a variable at all.

*/

