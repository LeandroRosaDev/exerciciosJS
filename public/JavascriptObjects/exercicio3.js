"use strict";
const obj = {
    a: 1,
    b: 7,
    c: 3,
};
const objeto = (arg) => {
    delete arg.a;
    return arg;
};
console.log(objeto(obj));
