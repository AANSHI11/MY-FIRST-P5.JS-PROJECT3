

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(700, 380);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x
       noseY=results[0].pose.nose.y
       console.log("nose x= " + noseX);
       console.log("nose y= "  + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    }

function take_snapshot() {
    save('Your photo.png')
}