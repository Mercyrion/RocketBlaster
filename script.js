/*var rocket = document.getElementById("rocket");*/
var flame = document.getElementById("flame");
var screen = document.getElementById("screen");


window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // Do stuff with the new orientation data
}


var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

function moveRocket() {


window.addEventListener("keydown", (e) => {
    let rocket = document.querySelector('.rocket');
    let flame = document.querySelector('.flame');
    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    var right = parseInt(window.getComputedStyle(rocket).getPropertyValue("right"));
    var leftFlame = parseInt(window.getComputedStyle(flame).getPropertyValue("left"));

    var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    var bottom = parseInt(window.getComputedStyle(rocket).getPropertyValue("bottom"));
    var upFlame = parseInt(window.getComputedStyle(flame).getPropertyValue("top"));

window.onkeydown = function(e) {
var kc = e.keyCode;
e.preventDefault();

if      (kc === 65) Keys.left = true;  // only one key per event
else if (kc === 87) Keys.up = true;    // so check exclusively
else if (kc === 68) Keys.right = true;
else if (kc === 83) Keys.down = true;
}


window.onkeyup = function(e) {
var kc = e.keyCode;
e.preventDefault();

if      (kc === 65) Keys.left = false;
else if (kc === 87) Keys.up = false;
else if (kc === 68) Keys.right = false;
else if (kc === 83) Keys.down = false;
};

if (Keys.up &&  up > 0) {
  
   rocket.style.top = up - 30 + "px";
    flame.style.top = upFlame - 30 + "px";
    
   
}
else if (Keys.down && up < 1300) {  
    rocket.style.top = up + 30 + "px";
    flame.style.top = upFlame + 30 + "px";
}

if (Keys.left &&  left > 0) {
   
    rocket.style.left = left - 30 + "px";
    flame.style.left = leftFlame - 30 + "px";
    
}
else if (Keys.right && right > 0) {
    rocket.style.left = left + 30 + "px";
    flame.style.left = leftFlame + 30 + "px";
}


if (e.key == "ArrowUp" || e.keyCode == 32) {
    let screen = document.querySelector('.screen');
    //32 is for space key
    //flame.style.left = left;
    //flame.style.up = up;
    var shot = document.createElement("div");
    
    shot.classList.add("shot");
    screen.appendChild(shot);
    
    var bottom = window.innerHeight - up- 470 ;
    shot.style.bottom = bottom +  "px";

    var moveshot= setInterval(() => {
        var rocks = document.getElementsByClassName("rock");
        for (var i = 0; i < rocks.length; i++) {
            var rock = rocks[i];
            if (rock != undefined) {
                var rockbound = rock.getBoundingClientRect();
                var blastbound = shot.getBoundingClientRect();
    
              //Condition to check whether the rock/alien and the bullet are at the same position..!
              //If so,then we have to destroy that roc
              if (
                blastbound.left >= rockbound.left -20 &&
                blastbound.right <= rockbound.right +20  &&
                
                blastbound.bottom <= rockbound.bottom
              ) {
                rock.parentElement.removeChild(rock); 
                shot.parentElement.removeChild(shot);
                
              }
            }
          }
      var shotbottom = parseInt(
        window.getComputedStyle(shot).getPropertyValue("bottom")
      );
     
      //Stops the shot from moving outside the gamebox
      if (shotbottom >= 1000) {
        clearInterval(moveshot);
      }

      shot.style.left = left + 9 +  "px"; //shot should always be placed at the top of my jet..!
     
      shot.style.bottom = shotbottom + 7 + "px";
    });
  }

});
}

/*
function checkShot(shot) {
    var blast = shot
    var rocks = document.getElementsByClassName("rock");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var blastbound = blast.getBoundingClientRect();

          //Condition to check whether the rock/alien and the bullet are at the same position..!
          //If so,then we have to destroy that rock

          if (
            blastbound.left >= rockbound.left &&
            blastbound.right <= rockbound.right &&
            blastbound.top <= rockbound.top &&
            blastbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //Just removing that particular rock;
            //Scoreboard
            
          }
        }
      }
}*/


/*
window.addEventListener("keydown", (e) => {
    keysPressed[e.key] = e.type;

    let rocket = document.querySelector('.rocket');
    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    var up = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    if (e.key == "ArrowLeft" && left > -1000) {
        rocket.style.left = left - 20 + "px";
    }
    //460  =>  board width - jet width
    else if (e.key == "ArrowRight" && left <= 1000) {
        rocket.style.left = left + 20 + "px";
    }
    else if (e.key == "ArrowUp" && up <= 1000) {
        rocket.style.top = up - 20 + "px";
    }

    else if (e.key == "ArrowDown" && up <= 1000) {
        rocket.style.top = up + 20 + "px";
    }
})

*/


function stars(){
    let star
    var timeout = 0;
    var generateStars = setInterval(() => {
      while(timeout <100) {

     
        let screen = document.querySelector('.screen');

        star = document.createElement('i');
    
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1+0.6;
    
        let h = Math.random() * 80 +0.1;
    
        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';
        screen.appendChild(star)
        timeout++;

      };
    
    },14)
    var deleteStars = setInterval(() => {
      screen.removeChild(star)
      
      },14)
}

   

function rocks() {
    var timeout = 0;
    var oldleft = 0;
    var generaterocks = setInterval(() => {

       
        let screen = document.querySelector('.screen');
        
        var rock = document.createElement('div');
        rock.classList.add('rock');
        
        

        let x = Math.floor(Math.random() * window.innerWidth);
       
        if ((oldleft - x) > 100 || (oldleft - x) < -100) {

       
        let duration = Math.random() * 1+4;
        let h = (Math.random()+1) * 110;

        rock.style.left = x + 'px';
        
        rock.style.height = h + 'px';
        rock.style.width
            
        rock.style.animationDuration = duration + 's';
        screen.appendChild(rock)
      }
      oldleft = x;
 
        
    }, 500);
}
   stars();
   rocks();
   moveRocket();


