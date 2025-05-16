const MainImg=document.querySelector("#main-img");
const Thumbs=document.querySelectorAll(".thumb");
for(let  thumb of Thumbs){
  thumb.addEventListener("click",()=>{
    MainImg.src=thumb.getAttribute("src");
    for(let t of Thumbs){
      t.classList.remove("active");
    }
    thumb.classList.add("active");
    

  });
}
const ChartBtn=document.querySelector(".size-chart");
const Modal=document.querySelector(".modal");
ChartBtn.addEventListener("click",()=>{
  Modal.classList.remove("hidden");




});
const Close=document.querySelector(".close")
Close.addEventListener("click",()=>{
  Modal.classList.add("hidden");

})
window.addEventListener("click",(e)=>{
  if(e.target===Modal){
    Modal.classList.add("hidden")
  }

})
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    Modal.classList.add("hidden");
  }
});
const tabs=document.querySelectorAll(".tab");
const contents=document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
  
    tabs.forEach(t => t.classList.remove("active"));

    tab.classList.add("active");

    
    contents.forEach(c => c.classList.remove("active"));

    contents[index].classList.add("active");
  });
});
