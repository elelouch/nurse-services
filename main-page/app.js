const carousel = document.querySelector(".main-carousel");
const caption = document.querySelectorAll(".slide-caption");
const captionSize = caption.length;

for(let i = 0; i < captionSize; i++){
  caption[i].addEventListener("click", (e)=>{window.location = "../nurse-panel/index.html"})
}
