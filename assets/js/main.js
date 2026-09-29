
document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector(".navbar");
 const scrollTopBtn=document.querySelector(".scroll-top");
 const toggleScrollTop=()=>{if(scrollTopBtn)scrollTopBtn.classList.toggle("show",window.scrollY>420)};
 const toggleNav=()=>{if(nav)nav.classList.toggle("scrolled",window.scrollY>45)};
 toggleNav(); toggleScrollTop();
 window.addEventListener("scroll",()=>{toggleNav();toggleScrollTop()});
 if(scrollTopBtn)scrollTopBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
 const items=document.querySelectorAll(".reveal");
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
 items.forEach(i=>io.observe(i));
 document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear());
 document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",e=>{
   e.preventDefault(); const msg=f.querySelector(".form-message"); if(msg){msg.textContent="Thank you. We will be in touch within one business day.";msg.classList.remove("d-none")}
   f.reset();
 }));
});
