let all_boxes=document.querySelectorAll(".box");

let win_patterns=[[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                  ];


let flag=true;
let count=0;
let msg=document.querySelector(".message");
let resetBtn= document.querySelector("#btn");
let newGameBtn = document.querySelector(".newbtn");

function showNewbtn(){
   let x=document.querySelector(".newbtn");
   x.classList.remove("hide");
   let y=document.querySelector(".message");
   y.classList.add("showbig");
}

function hideNewbtn(){
   msg.innerText="Click on any box to start the Game";
   let x=document.querySelector(".newbtn");
   x.classList.add("hide");
   let y=document.querySelector(".message");
   y.classList.remove("showbig");

}

function drawGame(){
   msg.innerHTML="Game is Draw !";
   showNewbtn();
}
function  showWinner(winner){
   
   msg.innerHTML=("Congratulation ! Winner is player" +"'"+ winner +"'");
   showNewbtn();

   for(box of all_boxes){
      box.disabled=true;
   }
}

function checkWinner(){

           ++count;
   for(let pattern of win_patterns){
      let pos1=all_boxes[pattern[0]].innerText;
      let pos2=all_boxes[pattern[1]].innerText;
      let pos3=all_boxes[pattern[2]].innerText;
      
      if(pos1 !="" && pos2 !="" && pos3 !="")
      {
         if(pos1===pos2 && pos2===pos3)
         {
            showWinner(pos1); 
         }
      }
   }
   if(count==9)  {

      drawGame();
      count=0;
   }
}
// input function
all_boxes.forEach((box)=>{

  box.addEventListener("click",()=>{

   if(flag){
     box.innerText="X";
     flag=false;
     msg.innerText="Player 0 turn ";
   }
   else{
      box.innerText="0";
     flag=true;
     msg.innerText="Player X turn ";
   }
   box.disabled=true; 
   checkWinner();
  });
});

// reset function
function resetFunction(){

   for(box of all_boxes){
      box.innerText="";
      box.disabled=false;
   }
   flag=true;
   count=0;
   hideNewbtn();
}
resetBtn.addEventListener("click",resetFunction);
newGameBtn.addEventListener("click",resetFunction);
