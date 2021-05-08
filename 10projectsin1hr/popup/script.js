const button = document.getElementById('open');
const popupcontainer = document.querySelector('.popup-container');
button.addEventListener('click',popup);
const close = document.getElementById('close');
close.addEventListener('click',()=>
{
    popupcontainer.classList.toggle('active');
})
function popup()
{

    popupcontainer.classList.remove('active');

}