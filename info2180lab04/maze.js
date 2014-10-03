var win = true;  

window.onload = function() {
    $("start").onclick = startClick;
    $("start").onmouseover = cheatCheck;
    $("end").onmouseover = reachEnd;
    var allBoundaries = $$("div#maze div.boundary");
    for (var i = 0; i < allBoundaries.length; i++) {
        allBoundaries[i].onmouseover = boundaryLeave;
    }
};

function cheatCheck(){
	$("maze").onmouseleave = boundaryLeave;
}


function boundaryLeave() {
    win = false;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    win = true;
    $("status").update("");
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function reachEnd() {
    if(win) {
        $("status").update("You win!");
    } else {
        $("status").update("You lose!");
    }
}