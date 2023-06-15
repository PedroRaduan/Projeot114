o = 0;
y = 0;
x = 0;

function preload(){
    bigode = loadImage('https://i.postimg.cc/XXMKDXp2/8079b21c777fd317f574461786956520.png');
    batom = loadImage('https://i.postimg.cc/gkPNDB8G/f97a8eeb4503f85d099d7da706e423a2-boca-batom-vermelho-achatado.png');
}

function sim(){
    o = 1;
}

function sur(){
    o = 2;
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    video.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('Modelo carregado');
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    x  = results[0].pose.nose.x-30;
    y = results[0].pose.nose.y-30;
    
}
}

function draw(){
    image(video, 0, 0, 500,450);
    if(o == 1){
        image(bigode, x, y, 60, 30);
    }
    if(o == 2){
        image(batom, x, y+15, 60, 30);
    }
}