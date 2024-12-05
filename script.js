//First step Element collection
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let count=0;

const WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
const resetGame=()=> {
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide")
    count=0;
}


const disableBoxes=()=>{
     boxes.forEach(box => {
        box.disabled=true;
    });
}

const enableBoxes=()=>{
    boxes.forEach(box => {
        box.disabled=false;
        box.innerText="";
    });
}

const showWinner =(winner)=>{
    msg.innerText=`Congratulations Player ${winner} you won 😁👍!`;
    msgContainer.classList.remove("hide");
}

const gameDraw = () => {
    msg.innerText = `Game is Tie😒.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };



const checkwinner =()=>{
    for(let pattern of WinPattern){
       let position1=boxes[pattern[0]].innerText;
       let position2=boxes[pattern[1]].innerText;
       let position3=boxes[pattern[2]].innerText;

        if(position1!= "" && position2!= "" && position3!= "")
        {
            if(position1===position2 && position2===position3)
            {
                console.log("Winner")
                showWinner(position1);
                return true;
            }
            
            
        }
    }
    return false;
};








let turn=true;

for (let i=0;i < boxes.length;i++)
{
    boxes[i].addEventListener("click",()=>{
        if(turn)
            {
               boxes[i].innerText="x"
               boxes[i].style.color="red"
               boxes[i].disabled=true
               turn=false
            }
            else{
                boxes[i].innerText="o"
                boxes[i].style.color="green"
                boxes[i].disabled=true
                turn=true
            }
            count++;
            let isWinner=checkwinner();
            if (count === 9 && !isWinner) {
                gameDraw();
              }
    });
}

newGameBtn.addEventListener("click",resetGame)

resetbtn.addEventListener("click",resetGame)




