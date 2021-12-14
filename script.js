const dropdown1 = document.querySelector('.nav-1');
const dropdown2 = document.querySelector('.nav-2');
const dropdown3 = document.querySelector('.nav-3');
const fontDown1 = document.querySelector('.font-down1');
const fontUp1 = document.querySelector('.font-up1');
const fontDown2 = document.querySelector('.font-down2');
const fontUp2 = document.querySelector('.font-up2');
const fontDown3 = document.querySelector('.font-down3');
const fontUp3 = document.querySelector('.font-up3');

function changeFontIcon(){
    fontDown1.classList.toggle('fontdown');
    fontUp1.classList.toggle('fontup');
    
}

function changeFontIcon1(){
    fontDown2.classList.toggle('fontdown');
    fontUp2.classList.toggle('fontup');
    
}

function changeFontIcon2(){
    fontDown3.classList.toggle('fontdown');
    fontUp3.classList.toggle('fontup');
    
}
dropdown1.addEventListener('click',changeFontIcon);
dropdown2.addEventListener('click',changeFontIcon1);
dropdown3.addEventListener('click',changeFontIcon2);