let home=document.querySelector("#home");
let start=document.querySelector("#start");
let btn=document.querySelector('.btn');

home.classList.add('show');

btn.addEventListener("click",()=>{
    
    document.querySelector("h1").classList.add("head");
    setTimeout(()=>{
        home.classList.remove('show');
        start.classList.add('show');
    },1800);
});


function winner(p,com){
    if(p==com) return 0;
    else if(p==1 && com==3) return 1;
    else if(p==2 && com==1) return 1;
    else if(p==3 && com==2) return 1;
    else if(p==3 && com==1) return -1;
    else if(p==1 && com==2) return -1;
    else if(p==2 && com==3) return -1;
}

let win=document.querySelector(".win");
let loss=document.querySelector(".loss");
let result=document.querySelector(".result");

function play(p){
    let com=Math.floor(Math.random()*100)%3;
    let res=winner(p,com+1);
    if(res==1){
        result.innerText="You Win";
        win.innerHTML=Number(win.innerHTML)+1;
    } 
    else if(res==-1){
        result.innerText="You Loss";
        loss.innerHTML=Number(loss.innerHTML)+1;
    }
    else {
        result.innerText="Draw !!!";
    }  
    setTimeout(()=>{
        result.innerText="";
    },1000);
}