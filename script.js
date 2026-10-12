const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){
  toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
}
const themeToggle=document.querySelector('.theme-toggle');
const savedTheme=localStorage.getItem('portfolio-theme');
if(savedTheme==='light'){document.body.classList.add('light'); if(themeToggle) themeToggle.textContent='☾';}
if(themeToggle){
  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('light');
    const light=document.body.classList.contains('light');
    localStorage.setItem('portfolio-theme',light?'light':'dark');
    themeToggle.textContent=light?'☾':'☀';
  });
}
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
 const email=btn.getAttribute('data-copy');
 try{await navigator.clipboard.writeText(email);btn.textContent='Email copied ✓';setTimeout(()=>btn.textContent='Copy email',1900)}catch(e){window.location.href='mailto:'+email}
}));
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
