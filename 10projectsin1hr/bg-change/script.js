// let array = ['red','green','blue'];
// const button = document.querySelector('button');
// console.log(button)
// const clicks = ()=>
// {
//     let a = array[Math.floor(Math.random()*2)];
//     console.log(a);
//     document.body.style.backgroundColor = a;
// }


// button.addEventListener('click',clicks);

const button = document.querySelector('button');

button.addEventListener('click',()=>
{
    document.body.style.background = randomBg();
});

function randomBg()
{
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}
