//your JS code here. If require
let body = document.querySelector('body');
window.addEventListener('load',(e)=>{
	let p = document.createElement('p');
	p.textContent = "DOM load success";
	body.appendChild(p);
});