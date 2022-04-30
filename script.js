score=0;
cross=true;
document.onkeydown = function(e){
    console.log("Key code is:" , e.keyCode)
     if(e.keyCode==38){
        jerry=document.querySelector('.jerry');
        jerry.classList.add('animatejerry');
        setTimeout(() => {
            jerry.classList.remove('animatejerry')
        },700);
    }
      if(e.keyCode==39){
          jerry = document.querySelector('.jerry');
          jerryx = parseInt(window.getComputedStyle(jerry,null).getPropertyValue('left'));
          jerry.style.left = (jerryx + 112) + "px";
        }  
      if(e.keyCode==37){
        jerry = document.querySelector('.jerry');
        jerryx = parseInt(window.getComputedStyle(jerry,null).getPropertyValue('left'));
        jerry.style.left = (jerryx - 112) + "px";
       }  
}
    
        setInterval(() => {
            jerry=document.querySelector('.jerry');
            gameover=document.querySelector('.gameover');
            tom=document.querySelector('.tom');
            jx = parseInt(window.getComputedStyle(jerry,null).getPropertyValue('left'));
            jy = parseInt(window.getComputedStyle(jerry,null).getPropertyValue('top'));

            tx = parseInt(window.getComputedStyle(tom,null).getPropertyValue('left'));
            ty = parseInt(window.getComputedStyle(tom,null).getPropertyValue('top'));

            offsetx = Math.abs(jx-tx);
            offsety = Math.abs(jy-ty);
            /*console.log(offsetx,offsety);*/

            if(offsetx < 90 && offsety < 61){
               gameover/*.style.visibility = "visible"*/.innerHTML = "Game over - Reload to start again";
               tom.remove('animatetom');
            }
            else if(offsetx<73 && cross){
                score+=1;
                updateScore(score);
                cross = false;
                setTimeout(() => {
                    cross = true;
                },1000);
                setTimeout(() => {
                    aniDur = parseFloat(window.getComputedStyle(tom,null).getPropertyValue('animation-duration'));
                    newdur = aniDur-0.1;
                    tom.style.animationDuration = newdur + 's';
                },500);
            }
        }, (100));
        function updateScore(score){
            scorecontainer.innerHTML = " YOUR SCORE: " + score
        }
    

