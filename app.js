let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","green","red","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    started=true;
    console.log("Game is started");
    levelUp();
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML=`GAME OVER. Your score is: <b>${level} <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    // console.log(btn);
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}