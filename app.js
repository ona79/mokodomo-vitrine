/* MOKODOMO — app.js */

// ── CURSOR ──
const cur  = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0,active=false;

cur.style.opacity='0'; ring.style.opacity='0';

function setP(el,x,y){
  el.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;
}

document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  if(!active){active=true;rx=mx;ry=my;cur.style.opacity='1';ring.style.opacity='1';}
  setP(cur,mx,my);
});
;(function loop(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  setP(ring,rx,ry);
  requestAnimationFrame(loop);
})();

const SEL='a,button,.tab-btn,.fc,.flip-wrap,.bento-flip,.rev,.min-row,.cli,.nav-btn,.btn-dark,.btn-light,.store-a';
document.addEventListener('mouseover',e=>{
  if(!e.target.closest(SEL))return;
  cur.style.opacity='.15';
  ring.style.width='50px';ring.style.height='50px';
  ring.style.borderColor='rgba(232,114,12,.7)';
  ring.style.backgroundColor='rgba(232,114,12,.04)';
});
document.addEventListener('mouseout',e=>{
  if(!e.target.closest(SEL))return;
  cur.style.opacity='1';
  ring.style.width='38px';ring.style.height='38px';
  ring.style.borderColor='rgba(232,114,12,.4)';
  ring.style.backgroundColor='transparent';
});

// ── TITRE ANIMÉ LETTRE PAR LETTRE ──
function animateTitle(){
  const h1 = document.querySelector('.hero-h1');
  if(!h1) return;
  const html = h1.innerHTML;
  // Remplacer chaque lettre par un span animé
  let delay = 0.1;
  h1.innerHTML = h1.innerHTML.replace(/(<[^>]+>)|([^<>\s])|([ ])/g, (match, tag, char, space) => {
    if(tag) return tag;
    if(space) return ' ';
    const d = delay;
    delay += 0.04;
    return `<span class="letter" style="animation-delay:${d}s">${char}</span>`;
  });
}
animateTitle();

// ── PARTICLES style antigravity.google ──
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let W,H,pts=[];

function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;}
resize();
window.addEventListener('resize',resize);

// Palette antigravity : tirets colorés
const COLORS=[
  '#4285F4','#1A73E8','#0F52BA',
  '#EA4335','#D93025',
  '#34A853','#1E8E3E',
  '#FBBC04','#F9AB00',
  '#9C27B0','#E8720C',
];

class Dash{
  constructor(){this.reset();}
  reset(){
    this.x=Math.random()*W;
    this.y=Math.random()*H;
    this.len=Math.random()*9+4;
    this.w=Math.random()*2+0.8;
    this.angle=Math.random()*Math.PI*2;
    this.rot=(Math.random()-.5)*.015;
    this.vx=(Math.random()-.5)*.28;
    this.vy=(Math.random()-.5)*.28;
    this.op=Math.random()*.65+.2;
    this.color=COLORS[Math.floor(Math.random()*COLORS.length)];
  }
  tick(){
    const dx=mx-this.x,dy=my-this.y;
    const d=Math.sqrt(dx*dx+dy*dy);
    if(d<150&&d>0){
      const f=(150-d)/150*.016;
      this.vx-=(dx/d)*f; this.vy-=(dy/d)*f;
    }
    this.vx*=.986;this.vy*=.986;
    this.x+=this.vx;this.y+=this.vy;
    this.angle+=this.rot;
    if(this.x<-10||this.x>W+10||this.y<-10||this.y>H+10)this.reset();
  }
  draw(){
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.angle);
    ctx.strokeStyle=this.color;
    ctx.globalAlpha=this.op;
    ctx.lineWidth=this.w;
    ctx.lineCap='round';
    ctx.beginPath();
    ctx.moveTo(-this.len/2,0);
    ctx.lineTo(this.len/2,0);
    ctx.stroke();
    ctx.restore();
  }
}
for(let i=0;i<160;i++)pts.push(new Dash());
;(function loop(){
  ctx.clearRect(0,0,W,H);
  pts.forEach(p=>{p.tick();p.draw();});
  requestAnimationFrame(loop);
})();

// ── PARALLAX PHONE ──
document.addEventListener('mousemove',e=>{
  const xR=e.clientX/innerWidth-.5, yR=e.clientY/innerHeight-.5;
  const ph=document.querySelector('.phone-scene');
  if(ph) ph.style.transform=`perspective(900px) rotateY(${xR*6}deg) rotateX(${yR*-3}deg)`;
});

// ── MAGNETIC BUTTONS ──
document.querySelectorAll('.btn-dark,.btn-light,.nav-btn,.store-main,.store-sec').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.15}px)`;
  });
  btn.addEventListener('mouseleave',()=>{btn.style.transform='';});
});

// ── MENU ──
const menuData={
  local:[
    {n:'Attiéké Poisson',r:'Chez Mama Coumba',p:'2 200',img:'athieke.png'},
    {n:'Baxal Bœuf',r:'Saveurs du Terroir',p:'2 500',img:'baxal.png'},
    {n:'Yassa Poulet',r:'Le Baobab',p:'2 800',img:'yassa_poulet.png'},
    {n:'Mboroxai',r:'Ndiaye Resto',p:'2 000',img:'mboroxai.png'},
  ],
  viandes:[
    {n:'Plat Viande',r:'Grillades Dakar',p:'4 000',img:'plat_viande.png'},
    {n:'Viande Sauce',r:'Saveurs du Terroir',p:'3 800',img:'viande_sauce.png'},
    {n:'Viande Grillée',r:'Braséro Plateau',p:'4 500',img:'viande_2.png'},
    {n:'Poulet Attiéké',r:'Chez Coumba',p:'3 200',img:'poulet_athieke.png'},
  ],
  pizzas:[
    {n:'Pizza Mozzarella',r:'Fusion Dakar',p:'4 500',img:'pizza.png'},
    {n:'Pizza Fromage',r:'Il Ristorante',p:'5 000',img:'pizza1.png'},
    {n:'Pizza Cœur',r:'Fusion Dakar',p:'4 800',img:'pizza2.png'},
    {n:'Foufou Sauce',r:'Mamadou Resto',p:'1 800',img:'foufou.png'},
  ],
  autres:[
    {n:'Attiéké Poulet',r:'Chez Mama Coumba',p:'3 200',img:'poulet_athieke.png'},
    {n:'Riz Sauce Tomate',r:'Saveurs du Terroir',p:'2 600',img:'mboroxai.png'},
    {n:'Bœuf Mijoté',r:'Grillades Dakar',p:'3 500',img:'plat_viande.png'},
    {n:'Foufou Légumes',r:'Mamadou Resto',p:'1 600',img:'foufou.png'},
  ]
};
function renderMenu(tab){
  const g=document.getElementById('foodGrid');g.innerHTML='';
  menuData[tab].forEach((item,i)=>{
    const d=document.createElement('div');d.className='fc';
    d.style.animationDelay=(i*.08)+'s';
    d.innerHTML=`<div class="fc-img"><img src="${item.img}" alt="${item.n}" loading="lazy"></div>
    <div class="fc-body"><div class="fc-name">${item.n}</div><div class="fc-resto">${item.r}</div>
    <div class="fc-row"><span class="fc-price">${item.p} FCFA</span><span class="fc-avail">Disponible</span></div></div>`;
    g.appendChild(d);
  });
}
document.querySelectorAll('.tab-btn').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');renderMenu(b.dataset.tab);
  });
});
renderMenu('local');

// ── COUNTERS ──
const cObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('[data-to]').forEach(el=>{
      const target=parseFloat(el.dataset.to),sfx=el.dataset.sfx||'';
      const isF=target%1!==0,t0=performance.now();
      const tick=now=>{
        const p=Math.min((now-t0)/1500,1),v=1-Math.pow(1-p,3);
        el.textContent=(isF?(target*v).toFixed(1):Math.floor(target*v))+sfx;
        if(p<1)requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    cObs.unobserve(e.target);
  });
},{threshold:.4});
document.querySelectorAll('.mini-stats').forEach(el=>cObs.observe(el));

// ── REVEAL ──
const RV='.rv,.rv-card,.rv-left,.rv-right';
document.body.classList.add('js-ready');
function rv(){
  document.querySelectorAll(RV).forEach(el=>{
    if(el.classList.contains('on'))return;
    try{if(el.getBoundingClientRect().top<innerHeight-20)el.classList.add('on');}
    catch(e){el.classList.add('on');}
  });
}
window.addEventListener('scroll',rv,{passive:true});
window.addEventListener('resize',rv,{passive:true});
rv();
[30,100,250,600,1200].forEach(t=>setTimeout(rv,t));
setTimeout(()=>document.querySelectorAll(RV).forEach(el=>el.classList.add('on')),1500);

// ── NAV ──
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40);},{passive:true});
document.getElementById('burger').addEventListener('click',()=>{
  document.getElementById('mobNav').classList.add('open');
  document.body.style.overflow='hidden';
});
document.getElementById('mobClose').addEventListener('click',closeMob);
document.getElementById('mobNav').addEventListener('click',e=>{if(e.target===document.getElementById('mobNav'))closeMob();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMob();});
function closeMob(){document.getElementById('mobNav').classList.remove('open');document.body.style.overflow='';}
