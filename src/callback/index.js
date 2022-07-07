//Example 1
function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 3, sum));

//Example 2
setTimeout(function (){
    console.log('Hola JavaScript!');
}, 5000);

//Example 3
function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Junior');