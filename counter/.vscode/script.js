let a = 0;
const dem = document.getElementById('demo');
setInterval(() => {
    a++;
    dem.textContent = a;
}, 1000);