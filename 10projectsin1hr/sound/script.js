const sounds = ["1","2","3","4","5"];

sounds.forEach((sound)=>
{
    //console.log(sound);
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerText = sound;


    btn.addEventListener("click",()=>
    {
        console.log(sound);
        stopsong();
        //console.log(document.getElementById(sound));
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);

});

function stopsong()
{
    sounds.forEach((sound)=>
    {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}