
function getItems(id){
    var bill=document.getElementById("bill").value;
    var people=document.getElementById("people").value;
    var button=document.getElementById(id).value;
    
    if (people == 0){
        people=1;
    }

    str=bill/people;
    tip=str*button/100;
    total=tip+str;
    document.querySelector(".tip-amount").innerHTML='₹'+tip.toFixed(2);
    document.querySelector(".total-amount").innerHTML='₹'+total.toFixed(2);
}

function reset(){
    document.querySelector(".tip-amount").innerHTML='₹0.00';
    document.querySelector(".total-amount").innerHTML='₹0.00';
    document.getElementById("bill").value='';
    document.getElementById("people").value='';
    document.getElementById("b6").value='';
}
