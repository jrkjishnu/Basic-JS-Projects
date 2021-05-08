const buttons = document.querySelectorAll('button');
const div1 = document.getElementById('pic');
const img = div1.querySelector('img');
const h3 = div1.querySelector('h3');
const h4 = div1.querySelector('h4');
const p = div1.querySelector('p');
console.log(img,h3,h4,p);
let count = 1;

class Profile
{
    constructor(img1,h3a,h4a)
    {
        console.log(img.src);

        img.src = img1;
        h3.textContent =h3a;
        h4.textContent = h4a;
    }
}


buttons.forEach((btn)=>
{
    btn.addEventListener('click',(e)=>
    {
        if(count == 0)
            count = 1;
        if(e.target.type === 'submit' && count >= 1 && count < 6)
            count++;
        else if(e.target.type === 'button' && count >0 && count <= 6)
            count--;
        else
        {
            let random = Math.random();
            console.log(random);
            random = (random * 6) + 1 ;
            console.log(random);
            random = Math.floor(random);
            console.log(random);
            count = random ;
        }
        if(count == 1)
        {

        const profile = new Profile('img2.jpg','Jishnuraj K','Engineer');
        div1.className = 'visible';
        }
        else if(count == 2)
        {
        const profile = new Profile('img3.jpg','Jayasu','AC');
        }
       
        else if(count == 3)
        {
        const profile = new Profile('img4.jpg','Kalasu','ELectrical');
        }
        else if(count == 4)
        {
        const profile = new Profile('img5.jpg','Looos','electronics');
         }
         else if(count == 5)
        {
        const profile = new Profile('img6.jpg','Jamz','Food');
         }
        else if(count == 6)
        {
        const profile = new Profile('img2.jpg','raj','info');
        }
        
    });
});




// buttons[1].addEventListener('click',()=>
// {
//     if(count == 1)
//     {
//         img.src = 'img2.jpg';
//         h3.textContent = 'Jishnuraj K';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count++;
//     }
//     else if(count == 2)
//     {
//         img.src = 'img3.jpg';
//         h3.textContent = 'Jayasu';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count++;
//     }
       
//     else if(count == 3)
//     {
//         img.src = 'img4.jpg';
//         h3.textContent = 'Kalasu';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count++;
//     }
//     else if(count == 4)
//     {
//         img.src = 'img5.jpg';
//         h3.textContent = 'Looos';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count++;
//     }
//     else if(count == 5)
//     {
//         img.src = 'img6.jpg';
//         h3.textContent = 'Jamzu';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count++;
//     }
        
// });

// //backward

// buttons[0].addEventListener('click',()=>
// {
//     if(count == 2)
//     {
//         img.src = 'img1.jpg';
//         h3.textContent = 'Peter Jon';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count--;
//     }
//     else if(count == 3)
//     {
//         img.src = 'img1.jpg';
//         h3.textContent = 'Jishnuraj K';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count--;
//     }
//     else if(count == 4)
//     {
//         img.src = 'img2.jpg';
//         h3.textContent = 'Jayasu';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count--;
//     }
       
//     else if(count == 5)
//     {
//         img.src = 'img3.jpg';
//         h3.textContent = 'Kalasu';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count--;
//     }
//     else if(count == 6)
//     {
//         img.src = 'img4.jpg';
//         h3.textContent = 'Looos';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count--;
//     }
//     else if(count == 7)
//     {
//         img.src = 'img5.jpg';
//         h3.textContent = 'Jamzu';
//         h4.textContent = 'Engineer';
//         div1.className = 'visible';
//         count--;
//     }
        
// });