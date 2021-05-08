const button = document.querySelectorAll('button');
let count =0;
const img = document.querySelector('img');
let a=0,b=0;
button[0].className = 'invisible';

button.forEach(function(btn){
    btn.addEventListener('click',(e)=>
    {
        button[0].classList.remove('invisible');
        if(btn.dataset.id == '1')
        {
            if(count <= 0)
                count = 5;
            else
                count--;
        }
        else
        {
            if(count >= 5)
                count = 0;
            else
                count++;
        }
        display(count);
    });
});
function display(count)
{
    if(a == 1)
        button[1].classList.remove('invisible');
    console.log(count);
    switch(count)
    {
        case 0:img.src='img1.jpg';
                break;
        case 1:img.src='img2.jpg';
                break;
        case 2:img.src='img3.jpg';
                break;
        case 3:img.src='img4.jpg';
                break;
        case 4:img.src='img5.jpg';
                
                break;
        case 5:img.src='img6.jpg';
                if(a==0)
                {
                    button[1].className ='invisible';
                    a++;
                }
                break;
    }
}