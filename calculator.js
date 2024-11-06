function calculate(n1, n2, operation) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            return n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}


console.log(calculate(10, 5, 'add'));        
console.log(calculate(10, 5, 'subtract'));   
console.log(calculate(10, 5, 'multiply'));                  
console.log(calculate(10, 5, 'divide'));    
