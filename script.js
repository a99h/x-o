var mainBlock = document.getElementById('mainBlock');
var motionHint = document.getElementById('motionHint');
var motion = 0;
var xBegin = true;

mainBlock.addEventListener('click', function(e) {
    if (motion % 2 == 0 /* && e.value == '' */) {
        e.target.textContent = "X";
        motionHint.textContent = "Ход O: ";
    } 
    else if (motion % 2 == 1 /* && e.value == '' */) {
        e.target.textContent = "O";
        motionHint.textContent = "Ход Х: ";
    }
    motion ++;
    checkWinner();
});

var gameBlock = document.getElementsByClassName('gameBlock');
function checkWinner() {
    if (gameBlock[0].textContent == 'X' && gameBlock[1].textContent == 'X' && gameBlock[2].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[3].textContent == 'X' && gameBlock[4].textContent == 'X' && gameBlock[5].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[6].textContent == 'X' && gameBlock[7].textContent == 'X' && gameBlock[8].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[0].textContent == 'X' && gameBlock[3].textContent == 'X' && gameBlock[6].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[1].textContent == 'X' && gameBlock[4].textContent == 'X' && gameBlock[7].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[2].textContent == 'X' && gameBlock[5].textContent == 'X' && gameBlock[8].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[0].textContent == 'X' && gameBlock[4].textContent == 'X' && gameBlock[8].textContent == 'X') {alert('Победили крестики'); updateGame()}
    if (gameBlock[2].textContent == 'X' && gameBlock[4].textContent == 'X' && gameBlock[6].textContent == 'X') {alert('Победили крестики'); updateGame()}

    if (gameBlock[0].textContent == 'O' && gameBlock[1].textContent == 'O' && gameBlock[2].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[3].textContent == 'O' && gameBlock[4].textContent == 'O' && gameBlock[5].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[6].textContent == 'O' && gameBlock[7].textContent == 'O' && gameBlock[8].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[0].textContent == 'O' && gameBlock[3].textContent == 'O' && gameBlock[6].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[1].textContent == 'O' && gameBlock[4].textContent == 'O' && gameBlock[7].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[2].textContent == 'O' && gameBlock[5].textContent == 'O' && gameBlock[8].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[0].textContent == 'O' && gameBlock[4].textContent == 'O' && gameBlock[8].textContent == 'O') {alert('Победили нолики'); updateGame()}
    if (gameBlock[2].textContent == 'O' && gameBlock[4].textContent == 'O' && gameBlock[6].textContent == 'O') {alert('Победили нолики'); updateGame()}

    if (gameBlock[0].textContent != '' && gameBlock[1].textContent != '' && gameBlock[2].textContent != '' && gameBlock[3].textContent != '' && gameBlock[4].textContent != '' && gameBlock[5].textContent != '' && gameBlock[6].textContent != '' && gameBlock[7].textContent != '' && gameBlock[8].textContent != '')
        {alert('Ничья'); updateGame()}
}

function updateGame() {
    for (var i = 0; i < gameBlock.length; i++) {
        gameBlock[i].textContent = '';
    }
    if (xBegin == true) {
        motion = 1;
        xBegin = false;
        motionHint.textContent = "Ход O: ";
    } else {
        motion = 0;
        xBegin = true;
        motionHint.textContent = "Ход X: ";
    }
}
/* function showId() {
    var showId = document.getElementsByClassName('gameBlock');
    for (var i = 0; i < showId.length; i++) {
        showId[i].textContent = '№ ' + i;
    }
}

showId(); */