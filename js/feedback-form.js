const form=document.querySelector("form"),submitBtn=document.querySelector("form button"),responseEl=document.querySelector(".form-response "),btnText=form.querySelector(".button-text"),spinner=form.querySelector(".spinner"),emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;submitBtn.addEventListener("click",(e=>{e.preventDefault();let t=form.querySelector("#name"),o=form.querySelector("#email"),s=form.querySelector("#message"),r=gsap.timeline(),n=.06;function a(e){r.to(e,{x:-7,duration:n}).to(e,{x:7,duration:n}).to(e,{x:0,duration:n}).to(e,{x:-7,duration:n}).to(e,{x:7,duration:n}).to(e,{x:0,duration:n})}return""==t.value?(a(t),void t.focus()):""===o.value?(a(o),void o.focus()):""===s.value?(a(s),void s.focus()):emailRegex.test(o.value)?(btnText.classList.add("hide"),spinner.classList.remove("hide"),void $.ajax({type:"POST",url:"https://kajendiran.pythonanywhere.com/portfolio/post_feedback",data:{name:t.value,email:o.value,message:s.value},success:e=>{setTimeout((()=>{responseEl.textContent=`Hey ${e.name}, I got your message!`,btnText.classList.remove("hide"),spinner.classList.add("hide"),t.value="",o.value="",s.value=""}),700),setTimeout((()=>{responseEl.textContent=""}),1e4)},error:e=>{btnText.classList.remove("hide"),spinner.classList.add("hide")}})):(a(o),void o.focus())}));