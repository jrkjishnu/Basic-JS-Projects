const articles = document.querySelectorAll('article');

const buttons = document.querySelectorAll('button');

buttons.forEach((btn)=>
{
    btn.addEventListener('click',(e)=>
    {
        for(let i =0;i< articles.length;i++)
        {
            articles[i].classList.remove('visible');
        }
        let id = e.target.dataset.id;
         if(id === 'Vision')
         {
            articles[0].classList.add('visible');
            console.log(articles['Vision']);
         }
         else if(id == 'Ambition')
            articles[1].classList.add('visible');
        else
            articles[2].classList.add('visible');
    });
});