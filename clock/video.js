const video = document.getElementById('lk');

function startvideo()
{
    navigator.getUserMedia(
        {video : {}},
        stream=>video.srcObject = stream,
        err=>console.error(err),
    )
}

startvideo();