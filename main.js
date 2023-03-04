'use strict'

const date = new Date;
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const output = day + ' ' +  '0'+month+ ' ' + year;

let randDay = 0;
let randMonth = 0; 
let randYear = 0;


function randDate(){
     randDay = parseInt(Math.random()*31);
     randMonth ='0' + parseInt(Math.random()*12);
     randYear ='0' + parseInt(Math.random()*2023);

}

function outRandom(){
    randDate();
    document.getElementById("date").textContent = randDay + ' '+ randMonth + ' '+ randYear;

}

function outDate(){
    document.getElementById("date").textContent = output;

}

function outRes(){

    window.setTimeout(outDate, 500);
    window.setTimeout(outRandom, 400);
    window.setTimeout(outRandom, 300);
    window.setTimeout(outRandom, 200);
    window.setTimeout(outRandom, 100);

}
