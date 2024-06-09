let userScor=0;
let compScor=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const compScr=document.querySelector("#comp-scor");
const userScr=document.querySelector("#user-scor");


const gameComputer=()=>{
      const option=['rock','paper','scissors'];
      const randIndex=Math.floor(Math.random()*3);
      return option[randIndex]; 

}

const DrawGame=()=>{
    msg.innerText=("game is draw");
    msg.style.backgroundColor="black";
}



const playGame=(UchoiceId)=>{

    console.log("clicked",UchoiceId);
    
    const comChoice=gameComputer();
    console.log("comp",comChoice);

    if(UchoiceId === comChoice){
            DrawGame();
    }
    else{
        let userWIn=true;
        if(UchoiceId==="rock")
          {  //scissior,paper
            userWIn= comChoice === "paper" ? false:true;
          }else if(UchoiceId==="paper"){
               //rock,scissor
              userWIn= comChoice === "scissors" ? false:true;
          }
          else{
               //rock ,paper
               userWIn= comChoice ==="rock" ? false : true;
          }
    
        showWinner(userWIn,UchoiceId,comChoice);    
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const UchoiceId=choice.getAttribute("id");
            // console.log("clicked",choiceId);
         playGame(UchoiceId);
    })
});



const showWinner=(userWIn,comChoice,UchoiceId)=>{
    if(userWIn){
        userScor++;
        userScr.innerText=userScor;
        msg.innerText=`you win ${UchoiceId} beat ${comChoice}`;
        msg.style.backgroundColor="green";
    }    
    else{
        compScor++;
        compScr.innerText=compScor;
        msg.innerText=`you lose ${comChoice} beat ${UchoiceId}`;
        msg.style.backgroundColor="red";
    }
}

