var path = "./sound/";
var items;
window.onload = function() {
    items = document.getElementsByClassName("sounds");
    for (var i = 0; i < items.length; i++) {
        console.log(items.item(i).innerHTML);
    }

}

function playSound(itemObj) {
    var name = itemObj.getElementsByClassName("sounds")[0].innerHTML;
    for (var i = 0; i < items.length; i++) {
        if (items.item(i).innerHTML === name) {
            itemObj.style.backgroundColor = "green";
        }

    }
    var songPath = path + name + ".mp3";
    var audio = document.getElementById("myAudio");
    audio.src = songPath;
    audio.play();
    audio.addEventListener('ended', function() {
        itemObj.style.backgroundColor = "blue";
    });

}