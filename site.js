const button=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
if(button&&nav){
 const closeMenu=()=>{nav.classList.remove('nav-open');button.setAttribute('aria-expanded','false');};
 button.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');button.setAttribute('aria-expanded',String(open));});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
 document.addEventListener('click',event=>{if(!nav.contains(event.target)&&!button.contains(event.target))closeMenu();});
}
