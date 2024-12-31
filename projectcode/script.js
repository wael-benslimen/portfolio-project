console.log("page loaded");


function over(element){
    element.style.transform = "scale(1.06)";
    element.style.boxShadow = "0 0 30px rgba(251, 191, 36, 0.5)";
    element.style.transition = "all 0.2s ease";
}

function out(element){
    element.style.transform ="scale(1)";
    element.style.boxShadow = "none";
}


function buttonOver(element){
    element.style.backgroundColor = "#fbbf24";
    element.style.color = "#1f2937";
    element.style.transform = "transLateY(-2px)";
    element.style.transition = "all 0.2s ease";
}

function buttonOut(element){
    element.style.backgroundColor = "transparent";
    element.style.color = "white";
    element.style.transform = "transLateY(0)";
}

function buttonIn(element){
    element.style.transform = "transLateY(-2px)";
    element.style.transition = "all 0.3s ease";
}

function buttonOute(element){
    element.style.transform = "transLateY(0)";
    
}

function navOver(id){
    document.getElementById(id).style.color = "#f59e0b";
    document.getElementById(id).style.transition = "all 0.3s ease";
}
function navOut(id){
    document.getElementById(id).style.color = "#e2e8f0";
}