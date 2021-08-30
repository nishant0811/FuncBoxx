// Frontend Functions

function createGamepad() {
    let gamePad = document.createElement('div')
    
    // gamePad.style.width = "380px";
    // gamePad.style.height = "500px";
    // gamePad.style.border = "solid black 1px";
    gamePad.classList.add('GamePad')

    document.body.appendChild(gamePad);

    return gamePad;
    
}

// Backend Functions


const grid = document.querySelector('.grid');
let time;

for( i = 0; i < 225; i++ ) {
    const square = document.createElement('div')
    grid.appendChild(square)
}


const rockArray = []
for( i = 0 ; i < 10 ; i++ ) {
    rockArray.push(Math.floor(Math.random() * 150) + 5)
}
// console.log(rockArray);

const squares = Array.from(document.querySelectorAll('.grid div'))

const ScanButton = document.querySelector('.Scan')
var movementButtons = document.getElementsByClassName('movementButton')

const elements = ["rocks","dust","dirt"]

var rocks = 0

function draw() {
    for( i = 0 ; i < rockArray.length ; i++ ) {
        if(i < 6) {
            squares[rockArray[i]].classList.add('rocks')
            rocks++
        }
        else {
            squares[rockArray[i]].classList.add(elements[Math.floor(Math.random() * 2) + 1])
        }
    }
}

draw()

currentRoverPosition = 202
squares[currentRoverPosition].classList.add('rover')

function MoveUp() {
    if( currentRoverPosition > 14 ) {
        squares[currentRoverPosition].classList.remove('upRotate')
        squares[currentRoverPosition].classList.remove('downRotate')
        squares[currentRoverPosition].classList.remove('rightRotate')
        squares[currentRoverPosition].classList.remove('leftRotate')
        squares[currentRoverPosition].classList.remove('rover')
        currentRoverPosition = currentRoverPosition - 15
        squares[currentRoverPosition].classList.add('rover')
        squares[currentRoverPosition].classList.add('upRotate')

        if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
            ScanButton.disabled = false
        }
        else {
            ScanButton.disabled = true
        }
    }

    else {
        // alert("error")
    }
}

function MoveDown() {

    if( currentRoverPosition < 210 ) {
        squares[currentRoverPosition].classList.remove('upRotate')
        squares[currentRoverPosition].classList.remove('downRotate')
        squares[currentRoverPosition].classList.remove('rightRotate')
        squares[currentRoverPosition].classList.remove('leftRotate')
        squares[currentRoverPosition].classList.remove('rover')
        currentRoverPosition = currentRoverPosition + 15
        squares[currentRoverPosition].classList.add('rover')
        squares[currentRoverPosition].classList.add('downRotate')

        if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
            ScanButton.disabled = false
        }
        else {
            ScanButton.disabled = true
        }
    }

    else {
        // alert("error")
    }
}

function MoveLeft() {
    squares[currentRoverPosition].classList.remove('upRotate')
    squares[currentRoverPosition].classList.remove('downRotate')
    squares[currentRoverPosition].classList.remove('rightRotate')
    squares[currentRoverPosition].classList.remove('leftRotate')
    squares[currentRoverPosition].classList.remove('rover')
    currentRoverPosition = currentRoverPosition - 1
    squares[currentRoverPosition].classList.add('rover')
    squares[currentRoverPosition].classList.add('leftRotate')

    if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
        ScanButton.disabled = false
    }
    else {
        ScanButton.disabled = true
    }
}

function MoveRight() {
    squares[currentRoverPosition].classList.remove('upRotate')
    squares[currentRoverPosition].classList.remove('downRotate')
    squares[currentRoverPosition].classList.remove('rightRotate')
    squares[currentRoverPosition].classList.remove('leftRotate')
    squares[currentRoverPosition].classList.remove('rover')
    currentRoverPosition = currentRoverPosition + 1
    squares[currentRoverPosition].classList.add('rover')
    squares[currentRoverPosition].classList.add('rightRotate')

    if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
        ScanButton.disabled = false
    }
    else {
        ScanButton.disabled = true
    }
}

const scoreDisplay = document.querySelector("#score")
var Score = 0

function ScanObject() {

    squares[currentRoverPosition].classList.add('scanning')
    upButton.disabled = true;
    downButton.disabled = true;
    leftButton.disabled = true;
    rightButton.disabled = true;

    setTimeout(()=>{
    squares[currentRoverPosition].classList.remove('scanning')
    squares[currentRoverPosition].classList.add('scanned')
    upButton.disabled = false;
    downButton.disabled = false;
    leftButton.disabled = false;
    rightButton.disabled = false;
    Score++;
    ScanButton.disabled = true
    scoreDisplay.innerHTML = 'Score: '+ Score
    if(Score == rocks ) {
        scoreDisplay.innerHTML = 'Winner!'
        ScanButton.disabled = true
        for(var i = 0; i < movementButtons.length; i++) {
            movementButtons[i].disabled = true;
        }
    }
  },3000)

}

//Calling Movement function


let upButton= document.getElementById('upButton');
let downButton= document.getElementById('downButton');
let leftButton= document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');


upButton.addEventListener("mousedown",()=>{
  MoveUp();
  time = setInterval(()=>{
    MoveUp();
  },250)
})

upButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})


downButton.addEventListener("mousedown",()=>{
  MoveDown();
  time = setInterval(()=>{
    MoveDown();
  },250)
})

downButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})

leftButton.addEventListener("mousedown",()=>{
  MoveLeft();
  time = setInterval(()=>{
    MoveLeft();
  },250)
})

leftButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})

rightButton.addEventListener("mousedown",()=>{
  MoveRight();
  time = setInterval(()=>{
    MoveRight();
  },250)
})

rightButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})
