//your JS code here. If require
let body = document.querySelector('body');
document.addEventListener('DOMContentLoaded',(e)=>{
     let p = document.createElement('p');
	 p.textContent = "DOM load success";
	 body.appendChild(p);
});