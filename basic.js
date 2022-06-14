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

/*
В этом задании вам нужно вписать в указанное место код, 
который будет присваивать переменной "х" значение суммы переменных "a" и "b" - в случае если  a < b, 
разность "a" и "b" - в случае если  a > b, и их произведение  в остальных случаях.
 */

function testIf(a, b) {
    var x;
    if (a < b) {
        x = a + b;
    } else if (a > b) {
        x = a - b;    
    } else {
        x = a * b;
    }
    return x;
}

function testIf(a, b) {
    var x;
    x = a < b ? a + b : (a > b ? a - b : a * b);
    return x;
}

function testIf(a, b) {
    var x;
    x = a < b && (a + b) || a > b && (a - b) || a * b;
    return x;
}

function testIf(a, b) {
    if (a < b) {
        return a + b;
    }
    if (a > b) {
        return a - b;
    }
    return a * b;
}

/*
В этом задании вам нужно вписать в указанное место код, 
который будет присваивать переменной "х" название цифры, 
переданной в переменную "а". Цифра в переменную "а" будет передана случайным образом 
и может оказаться в диапазоне от 0 до 9 включительно, 
название должно быть написано по-русски с большой буквы - "Ноль", "Один", "Два" и т.д.
 */

// 1. String constant
testCase = a => {
    const words = 'Ноль Один Два Три Четыре Пять Шесть Семь Восемь Девять';
    return words.split(' ')[a];
};

// 2. Array constant
testCase = a => {
    const words = ["Ноль", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять"];
    return words[a];
};

// 3. Object constant
testCase = a => {
    const words = {0: "Ноль", 1: "Один", 2: "Два", 3: "Три", 4: "Четыре", 
                   5: "Пять", 6: "Шесть", 7: "Семь", 8: "Восемь", 9: "Девять"};
    return words[a];
};

// 4. Switch block
testCase = a => {
    switch (a) {     
        case 0: return "Ноль"; 
        case 1: return "Один";  
        case 2: return "Два";  
        case 3: return "Три";  
        case 4: return "Четыре";  
        case 5: return "Пять";  
        case 6: return "Шесть"; 
        case 7: return "Семь"; 
        case 8: return "Восемь";
        case 9: return "Девять";
    }
};

// 5. If statements
testCase = a => {
      if (a == 0) return "Ноль"; 
      if (a == 1) return "Один";
      if (a == 2) return "Два";  
      if (a == 3) return "Три";  
      if (a == 4) return "Четыре";  
      if (a == 5) return "Пять";  
      if (a == 6) return "Шесть"; 
      if (a == 7) return "Семь"; 
      if (a == 8) return "Восемь"; 
      if (a == 9) return "Девять";
};

// 6. Ternary operators
testCase = a => 
      a == 0 ? "Ноль"  : 
      a == 1 ? "Один"  :  
      a == 2 ? "Два"   :  
      a == 3 ? "Три"   :  
      a == 4 ? "Четыре":  
      a == 5 ? "Пять"  :  
      a == 6 ? "Шесть" : 
      a == 7 ? "Семь"  : 
      a == 8 ? "Восемь": 
               "Девять";

// 7. Logical operators
testCase = a => 
      a == 0 && "Ноль"   || 
      a == 1 && "Один"   || 
      a == 2 && "Два"    || 
      a == 3 && "Три"    || 
      a == 4 && "Четыре" || 
      a == 5 && "Пять"   || 
      a == 6 && "Шесть"  || 
      a == 7 && "Семь"   || 
      a == 8 && "Восемь" || 
      a == 9 && "Девять";