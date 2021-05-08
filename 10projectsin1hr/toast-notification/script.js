const btn = document.querySelector('button');
const container = document.getElementById('container');
console.log(container);
console.log(btn);
btn.addEventListener('click',()=>
{
    const li = document.createElement('h2');
    li.classList.add('container');
    li.innerText = "Google";
    container.append(li);

    setTimeout(() => {
        li.remove();
        
    }, 3000);
})
