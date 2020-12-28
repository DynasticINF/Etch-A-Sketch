
let grid = document.querySelector('#grid-container');
let gridWidth = grid.clientWidth;
let gridHeight = grid.clientHeight

//Creates Default Grid 
function createGrid(){
  let divWidth = (gridWidth/16);
  let divHeight = (gridHeight/16);
  for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    for(let j = 0; j < 16; j++){
      let square = document.createElement('div');
      square.style.width =  divWidth +'px';
      square.style.height = divHeight +'px';
      square.style.display = 'inline-block';
      square.style.border = '1px solid #A2A2A2';
      square.classList.add('part');
      square.setAttribute('id','color');
      row.appendChild(square);
    }
    document.getElementById('grid-container').appendChild(row);
  }
  const tiles = document.querySelectorAll('.part');
  tiles.forEach((tile) => {
    tile.addEventListener('mouseover', (e)=>{
      square = e.target; 
      square.style.background = '#000000';
    });
  })
}

createGrid();
//Grid Size Button
const btnSize = document.querySelector('.btn-size');
btnSize.addEventListener('click',gridSize);

//Completely Wipes Grid
function reset(){
  const gridContain = document.querySelector('#grid-container');
  gridContain.innerHTML = '';
}

//Changes Grid Size 
function gridSize(){
  let input = prompt("Enter Grid Size(1-100): ");
  if(input > 100){
    alert('Error!');
  }else{
    reset();
    let divWidth = (gridWidth/input);
    let divHeight = (gridHeight/input);
    console.log(divWidth);
    console.log(divHeight);
    for(let i = 0; i < input; i++){
      let row = document.createElement('div');
      for(let j = 0; j < input; j++){
        let square = document.createElement('div');
        square.style.width = divWidth + 'px';
        square.style.height = divHeight + 'px';
        square.style.display ='inline-block';
        square.style.border = '1px solid #A2A2A2';
        square.classList.add('part');
        square.setAttribute('id','color');
        row.appendChild(square);
      }
      document.getElementById('grid-container').appendChild(row);
    }
    const tiles = document.querySelectorAll('.part');
    tiles.forEach((tile) => {
      tile.addEventListener('mouseover', (e)=>{
        square = e.target; 
        square.style.background = '#000000';
      });
    })  
  }
}

//Eraser Button
const btnErase = document.querySelector('.btn-eraser');
  btnErase.addEventListener('click',erase);

function erase(){
  const erase = document.querySelectorAll('.part');
  erase.forEach((tile)=>{
    tile.addEventListener('mouseover',(e)=>{
      tile = e.target;
      tile.style.background = '#fcfcfc';
    });
  });
}

//Reset Button
const btnReset = document.querySelector('.btn-reset');
  btnReset.addEventListener('click',clearScreen);

function clearScreen(){
  const clear = document.querySelectorAll('.part');
  clear.forEach((tile)=>{
    tile.style.background = "";
  })
}


//Random RGB
const btnRGB = document.querySelector('.btn-rgb');
  btnRGB.addEventListener('click',randomColors);

function randomColors(){
  const colors = document.querySelectorAll('.part');
  colors.forEach((hex)=>{
    hex.addEventListener('mouseover', ()=>{
      const random = Math.floor(Math.random()*16777215).toString(16);
      hex.style.background = "#" + random; 
    })
  })
}

//Color Picker 
let colorChange = document.getElementById('color-picker');
colorChange.addEventListener('mouseover', ()=>{
  const color = document.querySelectorAll('#color');
  color.forEach((cell)=>{
    cell.addEventListener('mouseover', (e)=>{
      cell.style.background = colorChange.value;
    })
  })
})