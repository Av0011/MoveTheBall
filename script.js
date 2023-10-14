let ball = document.getElementById("Ball");
    document.addEventListener("keydown",moveBall);
    let left =50 ;
    t = 50;

    function moveBall(event)
    {
        let elementW = ball.offsetWidth;
        let browserW = document.documentElement.clientWidth;
        let browserH = document.documentElement.clientHeight;


        let key = event.keyCode;
        if(key == 68 || key == 39) // to move right d
            {
                if(left+elementW+10<=browserW)
                {
                    ball.style.left = left+10+"px";
                    left +=10;
                    var audio = new Audio('cartoon-jump.mp3');
                    audio.play();
                    ball.style.backgroundColor = 'aqua';
                }
                else {
                    ball.style.left = browserW-elementW + "px";
                    ball.style.backgroundColor = 'red';
                    var audio = new Audio('Wrong_sound.mp3');
                    audio.play();
                    
                }

            }
        else if(key == 83|| key == 40) //to move down s
            {
                if(t+elementW+10<=browserH)
                {
                    ball.style.top = t+10+"px";
                    t+=10;
                    var audio = new Audio('cartoon-jump.mp3');
                    audio.play();
                    ball.style.backgroundColor = 'aqua';
                }
                else {
                    ball.style.top = browserH-elementW + "px";
                    ball.style.backgroundColor = 'red';
                    var audio = new Audio('Wrong_sound.mp3');
                    audio.play();
                }

            }
        else if(key == 87 || key == 38) // to move up w
            {
                if(t-10>=21)
                {
                    ball.style.top = t -10 + "px";
                    t-=10;
                    var audio = new Audio('cartoon-jump.mp3');
                    audio.play();
                    ball.style.backgroundColor = 'aqua';
                }
                else{
                    ball.style.backgroundColor = 'red';
                    var audio = new Audio('Wrong_sound.mp3');
                    audio.play();
                }

            }
        else if(key == 65 || key == 37) // to move left a
            {
                if(left-10>=0)
                {
                    ball.style.left = left-10+"px";
                    left-=10;
                    var audio = new Audio('cartoon-jump.mp3');
                    audio.play();
                    ball.style.backgroundColor = 'aqua';
                }else{
                    ball.style.backgroundColor = 'red';
                    var audio = new Audio('Wrong_sound.mp3');
                    audio.play();
                }

            }
    }