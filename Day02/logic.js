let boxex = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.conatainer');
let msgbtn = document.querySelector('#msg');

let turnO = true; // playerX playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableboxex();
    msgcontainer.classList.add("hide");
}

boxex.forEach((box)=>{
  box.addEventListener("click", ()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerHTML = "O";
        turnO = false;
    }else{
        box.innerHTML = "X";
        turnO= true;
    }
    box.disabled = true;
    checkWinner();

  })

})
 

 const disableboxex = () => {
    for(let box of boxex){
        box.disabled = true;
    }
 }
 const enableboxex = () => {
    for(let box of boxex){
        box.disabled = false;
        box.innerText = "";
    }
 }
const showWinner= (winner) =>{
    msgbtn.innerText = `Congrahhthulation, Winner is ${winner}`;
 msgcontainer.classList.remove("hide");
    disableboxex();
}
const checkWinner = () =>{
    for( let pattern of winPatterns){
        
               let pos1val =      boxex[pattern[0]].innerText;
               let pos2val =     boxex[pattern[1]].innerText;
               let pos3val =      boxex[pattern[2]].innerText;
     
               if(pos1val != "" && pos2val != "" && pos3val !=  "" ){
      
                if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner" + " " + pos1val);

            showWinner(pos1val);
        }
      }         
      
    }
};

newGamebtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);