console.log("page loaded");


function over(element) {
    element.style.transform = "scale(1.06)";
    element.style.boxShadow = "0 0 30px rgba(251, 191, 36, 0.5)";
    element.style.transition = "all 0.2s ease";
}

function out(element) {
    element.style.transform = "scale(1)";
    element.style.boxShadow = "none";
}


function buttonOver(element) {
    element.style.backgroundColor = "#fbbf24";
    element.style.color = "#1f2937";
    element.style.transform = "transLateY(-2px)";
    element.style.transition = "all 0.2s ease";
}

function buttonOut(element) {
    element.style.backgroundColor = "transparent";
    element.style.color = "white";
    element.style.transform = "transLateY(0)";
}

function buttonIn(element) {
    element.style.transform = "transLateY(-2px)";
    element.style.transition = "all 0.3s ease";
}

function buttonOute(element) {
    element.style.transform = "transLateY(0)";

}

function navOver(id) {
    document.getElementById(id).style.color = "#f59e0b";
    document.getElementById(id).style.transition = "all 0.3s ease";
}
function navOut(id) {
    document.getElementById(id).style.color = "#e2e8f0";
}

function downloadFile() {
    var link = document.createElement('a');
    link.href = './assets/images/751826dddbf2011014c758a865c7df6b.jpg';
    link.download = 'Abdallah-Yessine-Kriaa-CV.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function expand(id) {
    document.querySelector(id).style.height = '70%'
    document.querySelector(id).style.padding = '1rem'
    element.style.transition = "all 0.3s ease";
}

document.addEventListener("DOMContentLoaded", () => {

    // determine if objects are within the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });

    // Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll('.animate');

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));

}); 

