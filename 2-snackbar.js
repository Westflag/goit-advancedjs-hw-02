import"./assets/styles-B6lTGcYS.js";import{i as s}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();const o=parseInt(t.target.delay.value,10),a=t.target.state.value;new Promise((e,r)=>{setTimeout(()=>{a==="fulfilled"?e(`✅ Fulfilled after ${o}ms`):r(`❌ Rejected after ${o}ms`)},o)}).then(e=>{console.log(e),s.show({message:e})}).catch(e=>{console.error(e),s.error({message:e})})});
//# sourceMappingURL=2-snackbar.js.map
