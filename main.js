function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 150, 150, 220, 200);
    fill("red");
    circle(70, 70, 50);
    circle(430, 70, 50);
    circle(70, 430, 50);
    circle(430, 430, 50);
    fill("green");
    rect(90, 60, 320, 20);
    rect(90, 420, 320, 20);
    rect(60, 95, 20, 310);
    rect(420, 95, 20, 310);
    
}

function take_snapshot() {
    save("selfie.png");
}