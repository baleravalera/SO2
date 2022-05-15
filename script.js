function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.classNme="topnav";
    }

}

function randomBetween(min, max) {
    return Math.random()*(max - min)+min;
}

function quiz()    {
    var y = document.getElementById("t69");
    var p = document.getElementById("tam");
    var z = document.getElementById("hor");
    var l = document.getElementById("pes");
    var q = document.getElementById("kob");
    var random = 1;
    p.className = "starttt";
    z.className = "starttt";
    q.className = "starttt";    
    l.className = "starttt";
    random = randomBetween(1,3) ;
    random = Math.round(random)
    console.log(random)
    if(random == 1) { console.log ("1")
     y.className = "tampon";
     p.className = "correct";
     }
    if(random == 2) { console.log ("2")
     y.className = "Hormon";
     z.className = "correct";
     }
    if(random == 3) { console.log ("3")
     y.className = "Pessar"; 
     l.className = "correct";
    }

}
if(className==correct) {
    p.onclick=quiz()
}