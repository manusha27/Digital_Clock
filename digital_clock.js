const time = document.getElementById("time")
setInterval(function()
{
    let currentTime = new Date()
    time.innerHTML = currentTime.toLocaleTimeString()
},1000)