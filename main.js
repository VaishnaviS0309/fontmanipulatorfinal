
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 530);
    video.position(100 , 130);

    canvas=createCanvas(550 , 530);
    canvas.position(950 , 130);

    poseNet = ml5.poseNet(video , modelLoaded);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('#c157fa');

    document.getElementById("text_size").innerHTML = "Width And Height of a Text will be = "+ difference +"px";
    fill('#333634');
    stroke('#d895fc');
   textSize(difference);
   text('PETER' , 50 , 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}