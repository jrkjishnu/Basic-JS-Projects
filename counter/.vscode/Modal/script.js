const buttons = document.querySelectorAll('button');
const arti = document.querySelector('article');

console.log(buttons[1]);
buttons[0].addEventListener('click',()=>
{
    arti.classList.add('overlay');
});

buttons[1].addEventListener('click',()=>
{
    arti.classList.remove('overlay');
});
document.body.addEventListener('click',(e)=>
{
   if(e.target != buttons[0] && e.target != arti.querySelector('#mod') )
   {
    arti.classList.remove('overlay');
    console.log(e.target);
   }
});