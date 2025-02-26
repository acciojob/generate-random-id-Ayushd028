function makeid(l) {
    let randomStr = Math.random().toString(36).substring(2, 2 + l);
    console.log(randomStr);
    return randomStr; 
}

// Do not change the code below.
const l = parseInt(prompt("Enter a number."), 10); // Parse as base-10 integer
alert(makeid(l));
