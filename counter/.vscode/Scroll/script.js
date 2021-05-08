const date = document.getElementById('date');

const year = new Date();
console.log(year.getFullYear());
date.textContent = year.getFullYear();

const navtoggle = document.querySelector('.nav-toggle');
const linkscontainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navtoggle.addEventListener('click',()=>
{
   // linkscontainer.classList.toggle('show-links');
   const containerHeiight = linkscontainer.getBoundingClientRect().height;
   const linksHeight =  links.getBoundingClientRect().height;
   if(containerHeiight === 0)
   {
       linkscontainer.style.height = `${linksHeight}px`;
   }
   else
   {
       linkscontainer.style.height = 0;
   }

});

const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');

window.addEventListener("scroll",()=>
{
    const scrollheight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollheight > navHeight)
    {
        navbar.classList.add('fixed-nav');
    }
    else
    {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollheight > 500)
    {
        toplink.classList.add('show-link');
    }
    else
    {
        toplink.classList.remove('show-link');

    }
});
const section = document.querySelectorAll('section');
const scrolllinks = document.querySelectorAll('.scroll-link');
//console.log(scrolllinks);

scrolllinks.forEach((linku)=>
{
    linku.addEventListener('click',(e)=>
    {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const elmt = document.getElementById(id);
        const navheight = navbar.getBoundingClientRect().height;
        const containerHeiight = linkscontainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = elmt.offsetTop - navheight;
        if(!fixedNav)
            position = position - navheight;
        if(navheight > 82 )
            position = position + containerHeiight;
        window.scrollTo({
            left:0,
            top:position,
        });
        linkscontainer.style.height = 0;
    });
});
