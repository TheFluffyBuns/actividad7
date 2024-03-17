// Add your code here

let num1 = 3;
let num2 = 3;
let num3 = 12;
let num4 = 4;

let sum = num1 + num2;
let difference = num3 - num4;
let finalResult = sum * difference;

let evenOddResult = finalResult % 2;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);