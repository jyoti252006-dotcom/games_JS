let userWIN=0;
let compWIN=0;
const choices=document.querySelectorAll('.choice');
const msgc=document.querySelector('#msg');

const userSCORE=document.querySelector('#user_choice');
const compSCORE=document.querySelector('#comp_choice');

const compchance=()=>{
    const options=["rock","scissors","paper"];
    const rndomidx=Math.floor(Math.random()*3);
    return options[rndomidx];
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userscore=choice.getAttribute("id");
        playgame(userscore);
    });
});

const playgame=(userscore)=>{
    const compscore=compchance();
    if(userscore==compscore){
        drawgame();
    }
    else {
        let userwin=true;
        if(userscore==="rock"){
            //scissors,paper
            userwin =compscore==="paper"?false:true;
        }
        else if(userscore==="paper"){
            //rock,paper
            userwin =compscore==="scissors"?false:true;
        }
        else{
            //rock,scissors
            userwin= compscore==="rock"?false:true;
        }
        showwinner(userwin,userscore,compscore);
    }
};

const drawgame=()=>{
    msgc.innerText = "Game was Draw. Play again.";
    msgc.style.backgroundColor = "#081b31";
};

const showwinner=(userwin, userscore, compscore)=>{
    if (userwin){
        userWIN++;
        userSCORE.innerText = userWIN;
        msgc.innerText = `You win! Your ${userscore} beats ${compscore}`;
        msgc.style.backgroundColor = "green";
    }
    else{
        compWIN++;
        compSCORE.innerText = compWIN;
        msgc.innerText = `comp win! comp ${compscore} beats ${userscore}`;
        msgc.style.backgroundColor = "red";
    }
};