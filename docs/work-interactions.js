const buttons=[...document.querySelectorAll('.categories button')];
const figures=[...document.querySelectorAll('.gallery figure')];
const gallery=document.querySelector('.gallery');
const lightbox=document.getElementById('lightbox');
const enlarged=lightbox.querySelector('.lightbox-image');
const counter=lightbox.querySelector('.lightbox-count');
let currentCategory='highlights',currentIndex=0,lastFocus=null,observer;
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function visibleFigures(){return figures.filter(f=>f.dataset.cat===currentCategory)}
function reveal(){
 if(observer)observer.disconnect();
 const items=visibleFigures();
 if(reducedMotion||!('IntersectionObserver' in window)){items.forEach(f=>f.classList.add('is-visible'));return}
 observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}})},{rootMargin:'0px 0px -35px 0px',threshold:.12});
 items.forEach((f,i)=>{f.style.setProperty('--reveal-delay',`${(i%4)*80}ms`);observer.observe(f)});
}
function setCategory(cat){
 if(!buttons.some(b=>b.dataset.cat===cat))return;
 currentCategory=cat;
 document.querySelectorAll('.photo-group').forEach(group=>group.classList.toggle('is-active',group.dataset.cat===cat));
 buttons.forEach(b=>{const active=b.dataset.cat===cat;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 figures.forEach(f=>{f.classList.remove('is-visible');f.classList.toggle('show',f.dataset.cat===cat)});
 reveal();
 window.scrollTo({top:0,behavior:'instant'});
}
buttons.forEach(b=>b.addEventListener('click',()=>setCategory(b.dataset.cat)));
figures.forEach(f=>{const img=f.querySelector('img');img.setAttribute('tabindex','0');img.setAttribute('role','button');img.setAttribute('aria-label','사진 확대 보기');const open=()=>{lastFocus=document.activeElement;currentIndex=visibleFigures().indexOf(f);showImage();lightbox.hidden=false;document.body.classList.add('lightbox-open');lightbox.querySelector('.lightbox-close').focus()};img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});
function showImage(){const list=visibleFigures();if(!list.length)return;currentIndex=(currentIndex+list.length)%list.length;enlarged.src=list[currentIndex].querySelector('img').dataset.fullSrc||list[currentIndex].querySelector('img').src;counter.textContent=`${String(currentIndex+1).padStart(2,'0')} / ${String(list.length).padStart(2,'0')}`}
function move(delta){currentIndex+=delta;showImage()}
function close(){lightbox.hidden=true;document.body.classList.remove('lightbox-open');enlarged.removeAttribute('src');if(lastFocus)lastFocus.focus()}
lightbox.querySelector('.lightbox-close').addEventListener('click',close);
lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>move(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click',()=>move(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1);if(e.key==='Tab'){const controls=[...lightbox.querySelectorAll('button')];const i=controls.indexOf(document.activeElement);if(e.shiftKey&&i===0){e.preventDefault();controls[controls.length-1].focus()}else if(!e.shiftKey&&i===controls.length-1){e.preventDefault();controls[0].focus()}}});
let touchStart=0;lightbox.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].screenX},{passive:true});lightbox.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchStart;if(Math.abs(dx)>55)move(dx<0?1:-1)},{passive:true});
setCategory('highlights');
