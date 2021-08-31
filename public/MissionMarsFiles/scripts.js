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
const rover = document.getElementById('rover');
let topPos = 333;
let leftPos = 300;
let currentDirection = 'up';
let time;

for( i = 0; i < 36; i++ ) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

function randomUniqueNum(range, outputCount) {

  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}

const rockArray = randomUniqueNum(30,10)

const squares = Array.from(document.querySelectorAll('.grid div'))

const ScanButton = document.querySelector('.Scan')
var movementButtons = document.getElementsByClassName('movementButton')

const elements = ["goodrocks","badrocks","wasterocks1","wasterocks2"]

var goodrocks = 0
var badrocks = 0

function draw() {
    for( i = 0 ; i < rockArray.length ; i++ ) {
        if(i < 3) {
            squares[rockArray[i]].classList.add('goodrocks')
            squares[rockArray[i]].classList.add('rocks')
            goodrocks++
        }
        else if ( i >= 3 && i < 6) {
            squares[rockArray[i]].classList.add('badrocks')
            squares[rockArray[i]].classList.add('rocks')
            badrocks++
        }
        else {
            squares[rockArray[i]].classList.add(elements[Math.floor(Math.random() * 2) + 2])
        }
    }
}
draw()


currentRoverPosition = 35
const roverDiv = document.createElement("div")
roverDiv.classList.add('rover')

squares[currentRoverPosition].appendChild(roverDiv)


function changeDirection(direction){
  if(direction != currentDirection){
    rover.classList.remove('upRotate')
    rover.classList.remove('downRotate')
    rover.classList.remove('rightRotate')
    rover.classList.remove('leftRotate')
    switch (direction) {
      case 'up':
        currentDirection = 'up'
        rover.classList.add('upRotate')
        break;
        case 'down' :
          currentDirection = 'down'
          rover.classList.add('downRotate')
          break;

          case 'left' :
          currentDirection = 'left'
          rover.classList.add('leftRotate')
          break;

          case 'right' :
          currentDirection = 'right'
          rover.classList.add('rightRotate');
          break;
    }
  }
}

function updatePosition(top , left){
  rover.style.top = top+'px';
  rover.style.left = left+'px';
}


function MoveUp() {
    if( currentRoverPosition > 5 ) {

        topPos -= 51;
        updatePosition(topPos , leftPos);
        changeDirection('up')
        currentRoverPosition = currentRoverPosition - 6

        roverDiv.classList.add('rover')

        squares[currentRoverPosition].appendChild(roverDiv)

        if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
            ScanButton.disabled = false
        }
        else {
            ScanButton.disabled = true
        }
    }
    else{
    //   alert("Up Error");
    }
}


function MoveDown() {

    if( currentRoverPosition < 30 ) {
      topPos += 51;
      updatePosition(topPos , leftPos);
      changeDirection('down')
        currentRoverPosition = currentRoverPosition + 6

        roverDiv.classList.add('rover')

        squares[currentRoverPosition].appendChild(roverDiv)

        if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
            ScanButton.disabled = false
        }
        else {
            ScanButton.disabled = true
        }
    }
    else{
    //   alert("Down Error");
    }
}

function MoveLeft() {
    if( currentRoverPosition > 0 ) {

      leftPos -= 50;
      if(leftPos < 43.6){
        leftPos +=50;
        currentRoverPosition +=1;  
      }
      updatePosition(topPos , leftPos);
      changeDirection('left')
      currentRoverPosition = currentRoverPosition - 1

      roverDiv.classList.add('rover')

      squares[currentRoverPosition].appendChild(roverDiv)

      if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
          ScanButton.disabled = false
      }
      else {
          ScanButton.disabled = true
      }
    }
    else{
      alert("Left Error");
    }
}

function MoveRight() {
    if( currentRoverPosition < 36 ) {

      leftPos += 50;
      if(leftPos > 326.4){
        leftPos -=50;
        currentRoverPosition -=1;
      }
      updatePosition(topPos , leftPos);
      changeDirection('right')
      currentRoverPosition = currentRoverPosition + 1

      roverDiv.classList.add('rover')

      squares[currentRoverPosition].appendChild(roverDiv)

      if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
          ScanButton.disabled = false
      }
      else {
          ScanButton.disabled = true
      }
    }
    else{
      alert("Right Error");
    }
}



const scoreDisplay = document.querySelector("#score")
var Score = 0
var goodrocksScanned = 0

function ScanObject() {

    squares[currentRoverPosition].classList.add('scanning')
    upButton.disabled = true;
    downButton.disabled = true;
    leftButton.disabled = true;
    rightButton.disabled = true;
    ScanButton.disabled = true
    setTimeout(()=>{
    squares[currentRoverPosition].classList.remove('scanning')
    squares[currentRoverPosition].classList.add('scanned')
    upButton.disabled = false;
    downButton.disabled = false;
    leftButton.disabled = false;
    rightButton.disabled = false;
    // Score++;
    if( squares[currentRoverPosition].classList.contains('goodrocks') ) {
      Score++;
      goodrocksScanned++;
    }
    else if ( squares[currentRoverPosition].classList.contains('badrocks') ) {
      Score--;
    }
    ScanButton.disabled = true
    scoreDisplay.innerHTML = 'Score: '+ Score
    if(goodrocksScanned == goodrocks ) {
        if( Score == goodrocks ) {
          scoreDisplay.innerHTML = 'Perfect Win! Score: '+ Score + '/' + goodrocks
        }
        else {
          scoreDisplay.innerHTML = 'Game Over! Score: '+ Score + '/' + goodrocks
        }
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

