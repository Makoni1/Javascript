/*
В этом задании вам нужно вписать в указанное место код, 
который будет присваивать переменной "х" значение суммы переменных "a" и "b" 
в случае если  a > b или их произведение в остальных случаях.
*/

function testIf(a, b) {
    var x;
    if (a > b) {
     x = a + b;
    } else {
     x = a * b;
    }
    return x;
}

// 1. If statement
let testIf = (a, b) => {
    if (a > b) return a + b;
    return a * b;
};

// 2. Two if statements
testIf = (a, b) => {
    if (a > b) return a + b;
    if (a <= b) return a * b;
};

// 3. If-else statement
testIf = (a, b) => {
    if (a > b) { 
        return a + b;
    } else {
        return a * b;
    }
};

// 4. Ternary operator
testIf = (a, b) => a > b ? a + b : a * b;

// 5. Ветвление с помощью логических операторов
testIf = (a, b) => a > b && a + b || a * b;

// 6. Switch block
testIf = (a, b) => {
    switch (a > b) {
    case true: return a + b;
    case false: return a * b;
    }
};
