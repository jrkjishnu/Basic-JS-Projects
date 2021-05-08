const hourhand = document.querySelector('[hour-hand]');
console.log(hourhand);
const secondhand = document.querySelector('[second-hand]');
const minutehand = document.querySelector('[minute-hand]');

setInterval(setClock,1000);

function setClock()
{
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondsRatio+currentDate.getMinutes())/60;
    const hoursRatio = (minuteRatio+currentDate.getHours())/12;
    setRotation(secondhand,secondsRatio);
    setRotation(minutehand,minuteRatio);
    setRotation(hourhand,hoursRatio);
    //console.log(secondhand.style.setProperty(10,secondsRatio*360));
}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation',rotationRatio*360);
}