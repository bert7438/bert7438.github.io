let time = 0;
let min = 0;
let sec = 0;
let label = document.getElementById("timestamp");
setInterval(function () {
    time++;
    min = time / 60;
    sec = time % 60;
    let text = "Время на странице - ";
    if (Math.floor(min / 10) === 0) {
        text += "0" + Math.floor(min) + ":";
        if (Math.floor(sec / 10) === 0)
            text += "0" + sec;
        else
            text += sec;
    } else {
        text += Math.floor(min) + ":";
        if (Math.floor(sec / 10) === 0)
            text += "0" + sec;
        else
            text += sec;
    }
    label.innerText = text;
}, 1000);