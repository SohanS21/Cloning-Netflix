console.log('moshi mosh');
let cancel = document.querySelector('.cancel');
let anywhere = document.querySelector('.anywhere');
let price = document.querySelector('.price');
price.classList.add('anywhere1');
anywhere.classList.add('anywhere1');


let option1 = document.querySelector('.option1');
console.log(option1);
option1.addEventListener('click',()=>{
    console.log('clicked option1');
    option1.classList.add('navActive');
    option2.classList.remove('navActive');
    option3.classList.remove('navActive');

    cancel.classList.remove('anywhere1');
    price.classList.add('anywhere1');
    anywhere.classList.add('anywhere1');


})

let option2 = document.querySelector('.option2');
console.log(option2);
option2.addEventListener('click',()=>{
    console.log('clicked option2');
    option1.classList.remove('navActive')
    option2.classList.add('navActive');
    option3.classList.remove('navActive');

    cancel.classList.add('anywhere1');
    price.classList.add('anywhere1');
    anywhere.classList.remove('anywhere1');
})

let option3 = document.querySelector('.option3');
console.log(option3);
option3.addEventListener('click',()=>{
    console.log('clicked option3');
    option1.classList.remove('navActive');
    option2.classList.remove('navActive');
    option3.classList.add('navActive');

    cancel.classList.add('anywhere1');
    price.classList.remove('anywhere1');
    anywhere.classList.add('anywhere1');
})







