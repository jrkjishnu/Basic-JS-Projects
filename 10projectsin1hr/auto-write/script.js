const text = "Kerala is gods own country";
const container = document.querySelector('.container');
console.log(container);
let index = 0;
function writetoindx()
{
    // const li = document.createElement('h2');
    // li.innerHTML = text.slice(0,index);
    // index++;
    // li.classList.add('contain');
    // container.appendChild(li);
    document.body.innerText = text.slice(0,index);
    index++;
    if(index > text.length)
    {
        index = -8;
    }
}


setInterval(writetoindx,100);
