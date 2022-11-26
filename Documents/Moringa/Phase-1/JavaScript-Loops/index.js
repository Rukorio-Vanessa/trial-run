console.log("Hello npm")

//Create function that requires 2 parameters
//Its hould print/log those 2 parameters
//Ensure function name = print

function printValue(value){
    console.info(value)
}
function prints(val1, val2) {
    printValue(val1)
    printValue(val2)
}
prints(2, 3)
prints("val2", "Hello npm")

//OR another method using an anonymous function
const print = (tag, message) => console.log(tag, message)
print("message:", "Hello npm")

//Print Hello 5 times
//for loop
//syntax: for(iteration initializer; stopping condition*(its always a boolean exp); iteration continuer){}
for(let i = 1; i < 6; i = i + 1){
    print(i, "Hello")
}

// Create loop that prints:(Hello, i => 1; Hello, i => 4 upto i =>25)
for(let i = 1; i < 6; i = i + 1){
    print("Hello =>", i*i)
}

//WHILE Loop
//syntax: while(boolean condition*(same as stopping condition)){}
let j = 1
while(j < 6){
    print(j, "wakanda")
    j = ++j
}
let k = 100
print("k", ++k)
print("k-new:", k)

//DO WHILE Loop
//syntax: do{} while(boolean condition)
let m = 1
do{
    print(m, "Hey")
    m++
}while(m < 6)

//show difference using while loop and do loop
let z = 1
while(z < 1){
    print(z, "difference")
    z++
}// no output given

do{
    print(z, "the difference" )
    z++
}while(z < 1)//output is given



//try out not part of class
function exerciseDog(dogName, dogBreed) {
    const weatherToday = "Rainy"
  if (weatherToday === "Cloudy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}
console.log(exerciseDog('Tequila', 'maltese-terrier'))