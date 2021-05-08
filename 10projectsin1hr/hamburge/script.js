const nav = document.getElementById('nav');
const btn = document.querySelector('button');
console.log(nav);
console.log(btn);
btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');

})