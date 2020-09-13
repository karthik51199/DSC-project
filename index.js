const email = document.querySelector(".newsletter input");
const error = document.querySelector("#error");
const form = document.querySelector(".newsletter");

form.addEventListener("submit",(e) => {
  if(email.value == null || email.value === '' ||
  email.value.indexOf("@")<0 || email.value.indexOf(".")<0){
    error.textContent = "Please enter a valid email";
    e.preventDefault();
  }
})

const resNavTags = document.querySelector(".responsive-navbar-tags");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
  hamburger.style.display = "none";
  close.style.display = "block";
  resNavTags.style.display="grid";
});
close.addEventListener("click",function(){
  hamburger.style.display = "block";
  close.style.display = "none";
  resNavTags.style.display="none";
});
