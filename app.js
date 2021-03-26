//JS Variables
//Video section JS
const cancelVideo = document.querySelector("#cancelVideo");
const modal = document.querySelector(".modal");
const videoPlayBtn = document.querySelector("#videoPlayBtn");
videoPlayBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
cancelVideo.addEventListener("click", () => {
  modal.style.display = "none";
});
//Navigation section JS

const bar = document.querySelector("#bar");
const miniNavModal = document.querySelector(".miniNavModal");
const closeNav = document.querySelector(".closeNav");
bar.addEventListener("click", () => {
  miniNavModal.style.display = "block";
});
closeNav.addEventListener("click", () => {
  miniNavModal.style.display = "none";
});
