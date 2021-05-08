const content = [
    {
        id:1 ,
        title:"Butter Pancakes",
        category:"Ice-cream",
        img:"img1.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },
    {
        id:2 ,
        title:"Omlette",
        category:"Lunch",
        img:"img2.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },
    {
        id:3 ,
        title:"Chikkoo",
        category:"Shake",
        img:"img3.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },
    {
        id:4 ,
        title:"Rice",
        category:"Lunch",
        img:"img4.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },
    {
        id:5 ,
        title:"Cone",
        category:"Shake",
        img:"img5.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },
    {
        id:6 ,
        title:"Dosa",
        category:"Breakfast",
        img:"img6.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },
    {
        id:7 ,
        title:"Choco",
        category:"Ice-cream",
        img:"img6.jpg",
        desc:`jnkjb,jhbjhbjhbjhbjhbbkjhbh
        jhbjkjhbjhbjhbjbj`,
    },

];
const section = document.querySelector('.section-center');
let display;
const container = document.querySelector('.container');
let buttons;
window.addEventListener("DOMContentLoaded",function()
{

    //CreateButtons(content);
    displayMenuItems(content);
    //console.log(buttons);
    //console.log(buttons);
//let arraybtn = Array.from(buttons);
//console.log(arraybtn);
const categories = content.reduce(function(value,item)
    {
        if(!(value.includes(item.category)))
            value.push(item.category);
        return value;
    },['ALL']);

const categorybtns = categories.map(function(category)
{
    return `<button class="btn">${category}</button>`; 
}).join("");

container.innerHTML = categorybtns;

buttons = document.querySelectorAll('button');


buttons.forEach(function(button)
{
    console.log(button);
    //btn
    
    button.addEventListener('click',(e)=>
    {
        console.log(1);
        const category = e.target.textContent;
        //console.log(category);
        let breakfast = content.filter(function(item)
        {
            if(item.category == category )
                return item;
        });
        if(category == 'ALL')
            displayMenuItems(content);
        else
            displayMenuItems(breakfast);

        
    });
});


});
// function CreateButtons(menu)
// {
//     let but = menu.map(function(item)
//     {
//         return `<button class="btn">${item.category}</button>`;
//     });
//     let sets = [...new Set(but)];
//     sets = sets.join("");
//     container.innerHTML = sets ;
//     buttons = document.querySelectorAll('button');

// }



function displayMenuItems(menu)
{
    display = menu.map(function(item)
    {
        let contents = `<article>
        <img src="${item.img}" class="photo" width="200px" height="200px" alt="no"/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${15}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article>`;
    return contents;
    });
    display = display.join("");
    section.innerHTML = display;
}




