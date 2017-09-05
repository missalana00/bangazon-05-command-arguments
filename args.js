#!/usr/bin/env node

// console.log(process.argv);
// console.log(process.argv[2]);

// to use spread operator: 
let [,, ...theRestOfTheArguments] = process.argv;
function addAnArg(x) {
    // console.log(x); // ['4', '5', '6']
    let myAnswer = 0;
    x.forEach(function(element) {
        // console.log(element); // '4' '5' '6' (not all at once)
        myAnswer += parseInt(element); // turning string into a number
    }); 
    console.log(myAnswer);
};
addAnArg(theRestOfTheArguments);
// Above we are passing (accessing) the node process through the process variable 
// The node process has many properties, one of which is argv 
// The argsv has 2 arguments in the array automatically
// The third index in the array is whatever argument the user/client passes in

