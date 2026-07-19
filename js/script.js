const worksContents = document.querySelectorAll(".works-content");
const modalWindows = document.querySelectorAll(".overlay");

for(let i = 0; i < worksContents.length; i++){
  worksContents[i].addEventListener("click", ()=>{
    modalWindows[i].classList.remove("hidden");
  });
}

// worksContents.forEach((worksContent) => {
//   worksContent.addEventListener("click", ()=>{
//     modalWindow.classList.remove("hidden");
//   });
// });

modalWindows.forEach((modalWindow) => {
  modalWindow.addEventListener("click", (event)=>{
    if(event.target === modalWindow){
      modalWindow.classList.add("hidden");
    }
  });
});