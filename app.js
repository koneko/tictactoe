var turn = 'O'
var start = 'true'

document.getElementsByClassName('buton').innerText = ""
function putshit1() {
    document.getElementById('1').innerText = turn;
    document.getElementById('1').onclick = "";
    
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit11() {
    document.getElementById('11').innerText = turn;
    document.getElementById('11').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit111() {
    document.getElementById('111').innerText = turn;
    document.getElementById('111').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit2() {
    document.getElementById('2').innerText = turn;
    document.getElementById('2').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit22() {
    document.getElementById('22').innerText = turn;
    document.getElementById('22').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit222() {
    document.getElementById('222').innerText = turn;
    document.getElementById('222').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit3() {
    document.getElementById('3').innerText = turn;
    document.getElementById('3').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit33() {
    document.getElementById('33').innerText = turn;
    document.getElementById('33').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}

function putshit333() {
    document.getElementById('333').innerText = turn;
    document.getElementById('333').onclick = "";
    if (turn == 'O'){
        turn = 'X'
    } else if(turn == 'X'){
        turn = 'O'
    }
}


// rows
// top row
// middle row
// bottom row
// collums
// left
// middle
// right
// diagonals
// left
// right

// when a player wins, make them not clickable and display win message (and refresh page)
