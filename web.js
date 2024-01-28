let btn =document.getElementById('btn-main');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let head = document.getElementById('heading');
let foot = document.getElementById('footer');
let vid = document.getElementById('video');
let but = document.getElementById('button');
let total = document.getElementById('total');

 btn.addEventListener('click' , copy);
 function copy(){
    if(btn.textContent.includes('Light')){
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        btn.textContent = "Dark Mode";
        btn.className = "btn btn-outline-success";
        body.style.backgroundColor = "white";
        head.style.color = "black";
        foot.style.backgroundColor = "black";
        foot.style.color = "white";
        foot.style.borderRadius = "15px";
        vid.style.color = "black";
        but.style.backgroundColor = "white";
        but.style.color = "black";
       
    
    }
    else{
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        btn.textContent = "Light Mode";
        btn.className = "btn btn-outline-light";
        body.style.backgroundColor = "black";
        head.style.color = "white";
        foot.style.backgroundColor = "white";
        foot.style.color = "black";
        foot.style.borderRadius = "15px";
        vid.style.color = "white";
        but.style.backgroundColor = "black";
        but.style.color = "white";
         
    }

}

