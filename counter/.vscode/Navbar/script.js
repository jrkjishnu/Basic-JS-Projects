const button =document.querySelector('button');
const li =document.querySelectorAll('li');
console.log(li[0].className);
button.addEventListener('click',()=>
{
    li[0].className = 'visible';
    li[1].className = 'visible';
    li[2].className = 'visible';
    li[3].className = 'visible';

    console.log(li.className);
});