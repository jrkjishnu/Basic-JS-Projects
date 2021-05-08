const Addmovie = document.querySelector('button');
console.log(Addmovie);

const popup = document.querySelector('.invisible');
const add = document.getElementById('Add');


let table = document.getElementById('demo');

let tr='';
const inputs = document.querySelectorAll('input');
console.log(inputs);

const container = document.querySelector('.container');
Addmovie.addEventListener('click',()=>
{
    if(popup.className == 'invisible')
         popup.className = 'popup';
    else
        popup.className = 'invisible';
});

add.addEventListener('click',()=>
{
    if(inputs[0].value !="" || inputs[1].value!="" || inputs[2].value != "")
    {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${inputs[0].value}</td>
        <td>${inputs[1].value}</td>
        <td>${inputs[2].value}</td>
        `;
        table.appendChild(tr);
        table.className ='alignt';
        popup.className = 'invisible';

        document.querySelector('.myform').reset();
    }

    else
    {
        alert("Please fill the details");
    }
    console.log(table);

    
});

table.addEventListener('click',(e)=>
{
    let a = e.target.parentElement;
    a = a.remove();
    console.log(table);
    console.log(tr);
});