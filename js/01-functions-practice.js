//STEP 1
function halfNumber(number) {
    return "Half of " + number + " is " + number/2 + ".";
}

//STEP 2
function squareNumber(number) {
    return "The result of squaring the number " + number + " is " + number*number + ".";
} 

//STEP 3
function percentOf(number1, number2) {
    return number1 + " is " + parseFloat((number1*100)/ number2) + "% of " + number2 + ".";
}

//STEP 4
function findModulus(number1, number2) {
    if(number1 > number2) {
        return number1 % number2 + " is the modulus of " + number1 + " and " + number2 + "." ;
    } else {
        return number2 % number1 + " is the modulus of " + number1 + " and " + number2  + "." ;
    }
        
}

function main() {
    var choice, number, number1, number2;
    while(choice !== 5) {
        choice = parseInt(window.prompt("Menu:\n1: Half the given Number\n2: Square the given Number\n3: Percent of a Number\n4: Modulus of the Numbers\n5:Exit the program"));
        if(choice === 1) {
            number = window.prompt("Enter number ");
            console.log(halfNumber(number));
        }
        else if(choice === 2) {
            number = window.prompt("Enter number to calculate square");
            console.log(squareNumber(number));
        }
        else if(choice === 3) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            console.log(percentOf(number1, number2));
        }
        else if(choice === 4) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            console.log(findModulus(number1, number2));
        }
        else if(choice === 5) break;
    }
}

main();