import"./assets/styles-B6lTGcYS.js";import{f,i as m}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-days]"),c=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),s=document.querySelector("[data-seconds]");f(t,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){console.log(o[0]);const i=o[0],a=new Date;isNaN(i.getTime())||i<=a?(e.disabled=!0,m.error({message:"Please choose a date in the future"})):(console.log("Enable button"),e.disabled=!1)}});let n;e.addEventListener("click",()=>{const o=new Date(t.value);e.disabled=!0,t.disabled=!0,n&&clearInterval(n),n=setInterval(()=>{const a=o-new Date;if(a<=0){t.disabled=!1,clearInterval(n),d.textContent="00",c.textContent="00",u.textContent="00",s.textContent="00",m.show({title:"Hey",message:"Countdown finished!"});return}const r=h(a);d.textContent=String(r.days).padStart(2,"0"),c.textContent=String(r.hours).padStart(2,"0"),u.textContent=String(r.minutes).padStart(2,"0"),s.textContent=String(r.seconds).padStart(2,"0")},1e3)}),e.disabled=!0});function h(t){const s=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),n=Math.floor(t%864e5%36e5/6e4),o=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:l,minutes:n,seconds:o}}
//# sourceMappingURL=1-timer.js.map
