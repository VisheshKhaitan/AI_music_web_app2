song = "";
function preload()
{
song = loadSound("music.mp3");
}

function setup()
{
canvas = createCanvas(601,501);

video = createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}

function stop()
{
    song.stop();
}