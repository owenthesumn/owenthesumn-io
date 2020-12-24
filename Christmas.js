let mainButton = document.getElementById("clickme");
let head = document.getElementById("head");
let greetings = document.getElementById("greetings");
let main = document.getElementById("main");
let letter = document.getElementById("letter");
let letterContent = document.getElementById("letter-content");
let wuv = document.getElementById("wuv");

mainButton.onclick = shiftTitle;

function shiftTitle () {
    greetings.style.transition = "ease 3s";
    greetings.style.transform = "translate(0px,-200px)";
    letterContent.style.transition = "ease-in 5s";
    mainButton.style.visibility = "hidden";
    letter.style.visibility = "visible";
    myMove();
}

$(letter).hover(function() {
    $(letterContent).css("visibility", "hidden");
    $(wuv).css("visibility", "visible");},
    function () {
        $(wuv).css("visibility", "hidden");
        $(letterContent).css("visibility", "visible");
});



function myMove() {
    var pos = -500;
    var id = setInterval(frame, 5);
    function frame() {
    if (pos == 50) {
        clearInterval(id);
    } else {
        pos++;
        letter.style.bottom = pos + 'px'; 
    }
    }
}