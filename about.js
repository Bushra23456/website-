let btn =document.getElementById('btn-main');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let head = document.getElementById('heading');
let total = document.getElementById('total');
let button = document.getElementById('button');
let foot = document.getElementById('footer');




 btn.addEventListener('click' , copy);
 function copy(){
    if(btn.textContent.includes('Light')){
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        btn.textContent = "Dark Mode";
        btn.className = "btn btn-outline-success";
        body.style.backgroundColor = "white";
        head.style.color = "black";
        total.style.color = "black";
        button.style.color = "black";
        button.style.backgroundColorcolor = "white";
        foot.style.backgroundColor = "black";
        foot.style.color = "white";


    
    }
    else{
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        btn.textContent = "Light Mode";
        btn.className = "btn btn-outline-light";
        body.style.backgroundColor = "black";
        head.style.color = "white";
        total.style.color = "white";
        button.style.color = "white";
        button.style.backgroundColorcolor = "black";
        foot.style.backgroundColor = "white";
        foot.style.color = "black";
    }

}