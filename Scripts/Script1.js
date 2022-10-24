const tekst=document.getElementById("tekst");
const button=document.getElementById("oo");
const A=document.getElementById("A");
const B=document.getElementById("B");
const C=document.getElementById("C");

button.addEventListener('click',(e)=>{
    var t=tekst.value;
    if((t=="harnaś")||(t=="perła")||(t=="piast"))
    {
        sessionStorage.setItem("piwo",tekst.value);
     window.location.href="game.html";
    }
    else{
        alert("Zła odpowiedź");
    }
});
