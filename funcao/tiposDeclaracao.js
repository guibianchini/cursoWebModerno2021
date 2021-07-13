// function declaration (consegue ser usada por hoisting)
function soma(x,y){
    return x + y
}

// function expression (não consegue usar por hoisting -- is not defined)
const sub = function (x,y){
    return x- y
}

// named function expression (tb não consegue usar por hoisting -- is not defined)
const mult = function mult(x,y){
    return x * y
}
