var bildSpel = [
    'johan.jpg',
    'tor.jpg',
    'samuel.jpg'
];
var currentIndex = 0;
var interval = null;

function rullaBildspel() {
    var img=document.getElementById('bildspel');
    img.setAttribute('src', bildSpel[currentIndex]);
    currentIndex++;
    if (currentIndex === bildSpel.length) {
        currentIndex=0;
    }
}

function startaBildspel(){
    interval = setInterval(rullaBildspel, 1000);
}

function stoppaBildspel(){
    clearInterval(interval);
}