const piwo=sessionStorage.getItem("piwo");
const f=document.getElementById("Mainscreen");
let score=0;
f.innerHTML=`<div id="piwko">
<img id="obraz" src="Resources/${piwo}.png">
</img></div>        <h1 id=Score>Score: 0</h1>
`;
const piwko=document.getElementById("piwko");

piwko.onclick= function(){
    score+=1;
document.getElementById("Score").innerHTML="Score: "+score;
piwko.style.left=`${Math.floor(Math.random()*70)+10}`+"%";
piwko.style.top=`${Math.floor(Math.random()*window.innerHeight)-300}`+"px";

};


