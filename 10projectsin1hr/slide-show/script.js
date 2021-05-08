const imgs = document.getElementById('imgs');
const img = document
.querySelectorAll('#imgs img');
console.log(img);
// let a=0;
// function slide()
// {
//     if(a == 0)
//     {
//         img.src = "images/img2.jpg"
//         a++;
//     }
//     else if(a==1)
//     {
//         img.src = "images/img3.jpg";
//         a=0;

//     }

// }

// setInterval(slide, 900);

let ind = 0;

function run()
{

    ind++;

    if(ind > img.length -1)
    {
        ind = 0;
    }

    imgs.style.transform = `translateX(${-ind*500}px)`;

}

setInterval(run,900);