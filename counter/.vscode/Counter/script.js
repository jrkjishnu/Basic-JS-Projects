const buttons = document.querySelectorAll('input');
console.log(buttons);
const h1 = document.querySelector('h1');
let value = parseInt(h1.textContent);

buttons.forEach(function(btn)
{
    btn.addEventListener('click',(e)=>
    {
        if(e.target.value === 'DECREASE')
            value--;
        else if(e.target.value === 'INCREASE')
            value++;
        else
            value = 0 ;
        h1.textContent = value;

        if(value < 0)
            h1.style.color = 'red';
        else if(value > 0)
            h1.style.color = 'green';
        else
            h1.style.color = 'white';
        
    });
});

// buttons[0].addEventListener('click',()=>
// {
//     value--;
//     h1.textContent = value;
// });
// buttons[1].addEventListener('click',()=>
// {
//     value++;
//     h1.textContent = value;
// });
// buttons[2].addEventListener('click',()=>
// {
//     value=0;
//     h1.textContent = 0;
// });