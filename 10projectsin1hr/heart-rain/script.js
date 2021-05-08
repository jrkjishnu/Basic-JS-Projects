const div = document.querySelector('.heart');

function heats()
{
    const li = document.createElement('div');
    li.classList.add('heart');
    li.style.left = Math.floor(Math.random()*100)+'vw';
    li.style.animationDuration = Math.random()*2 + 3 +"s";
    console.log(li.style.left);
    li.innerText= "❤";

    document.body.appendChild(li);
}

setInterval(heats, 100);
