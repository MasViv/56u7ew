video="";
status="";
objects=[];

function preload()
{
    video=createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
}

function draw()
{
    image(video,0,0,480,380);
    if(status != "")
    {
        objectDetector.detect(video,gotResults);
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status, i guess";
            document.getElementById("number_of_objects").innerHTML="there are " + objects.length + "Σκιμπίδη ντεκόπ ναι ναι";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + "" + percent + "%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Loading...Loading..SKIBIDI SKIBIDI";
}

function modelLoaded()
{
    console.log("Nope");
    status=true;
    video.loop();
    video.volume(0);
    video.speed(1);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

