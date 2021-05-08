const button = document.querySelectorAll('button');
const article = document.querySelectorAll('article');
const arti = document.querySelector('article');
const div = arti.querySelectorAll('div');
console.log(div[0]);
let id = 0;
button.forEach((btn)=>
{
    btn.addEventListener('click',(e)=>
    {
       
        console.log(e.target.parentElement.id);
        e.target.parentElement.querySelector('div').classList.toggle('visi');
        e.target.parentElement.classList.toggle('visible');

        for(let i =0 ; i< 3 ; i++)
        {
            console.log()
            if(e.target.parentElement.id !== article[i].id)
            {
                article[i].classList.remove('visible');
                article[i].querySelector('div').classList.remove('visi');
            }
        }

    });
});



// button.addEventListener('click',()=>
// {
//     arti.classList.toggle('visible');
//     div.classList.toggle('visi');

//     console.log(div.className);
// });