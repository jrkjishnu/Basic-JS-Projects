const qns = [
    {
        id:1,
        Question:"What is the full form of JS",
        option1:"Javascript",
        option2:"JavaSuper",
        option3:"JustScript",
        option4:"HordenShpes"
    },
    {
        id:2,
        Question:"What is html",
        option1:"hype text markup language",
        option2:"hype md tu lk",
        option3:"hup teh mdy ldj",
        option4:"hrt teb may lau"
    },
    {
        id:3,
        Question:"What is CSS",
        option1:"Javascript",
        option2:"JavaSuper",
        option3:"JustScript",
        option4:"stylesheet"
    },
    {
        id:4,
        Question:"What is PHP",
        option1:"hype text markup language",
        option2:"hype md tu lk",
        option3:"hup teh mdy ldj",
        option4:"PHP"
    }
]
const ul = document.createElement('article');
let mark = 0;

let count = 0;
const div = document.querySelector('.container1');
const button =document.querySelector('button');
let i=0;
const play = document.querySelector('.submit');
play.addEventListener('click',()=>
{
    location.reload();
});
button.addEventListener('click',()=>
{
    if(i < 4)
    {
        document.getElementsByName("raj").forEach(radio =>
            {
                if(radio.checked)
                {
                    myFunction(radio.value,i);
                }
            });
        if(count == 0)
            i++;
        
        ul.innerHTML = `<h1>${qns[i].Question}</h1>
        <ul>
            <input type="radio" name="raj" value="${qns[i].option1}"><label>${qns[i].option1}</label></br></br>
            <input type="radio" name="raj" value="${qns[i].option2}"><label>${qns[i].option2}</label></br></br>
            <input type="radio" name="raj" value="${qns[i].option3}"><label>${qns[i].option3}</label></br></br>
            <input type="radio" name="raj" value="${qns[i].option4}"><label>${qns[i].option4}</label></br></br>
        </ul>`;

        console.log(qns[i].id,qns[i].Question);
        count++;

       const value = ul.querySelector('input[type="radio"]');
        div.innerHTML = ul.innerHTML;
        i++;
        
    }
   else
   {
    document.getElementsByName("raj").forEach(radio =>
        {
            if(radio.checked)
            {
                myFunction(radio.value,i);
            }
        });
       button.disabled = true
       const h3 = document.querySelector('h3');
        h3.textContent = `Your Score is ${mark}/${qns.length}`;
        i=0;
        play.classList.add('visible');

        
   }
    
});
function myFunction(checks,i)
    {
        if(checks == "Javascript" && i == 0)
            mark++;
        else if(checks == "hype text markup language" && i == 2)
            mark++;
        else if(checks == 'stylesheet' && i == 3)
            mark++;
        else if(checks == 'PHP' && i == 4)
            mark++;
      
    }

  