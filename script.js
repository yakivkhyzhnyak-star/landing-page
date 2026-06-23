const offer =
"https://app.hawktrk.com/click?pid=2&offer_id=18396&sub2=u802940&sub5=bonus";

function goOffer(){

window.location.href=offer;

}

let sec=59;

const s=document.getElementById("s");

const m=document.getElementById("m");

setInterval(()=>{

sec--;

if(sec<0){

sec=59;

}

s.innerHTML=String(sec).padStart(2,'0');

},1000);
