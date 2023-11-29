const toastBox = document.querySelector(".js-toast-box");
const succefullBtn = document.querySelector(".js-successful-btn");
const errorBtn = document.querySelector(".js-error-btn");
const invalidBtn = document.querySelector(".js-invalid-btn");

succefullBtn.addEventListener("click", () => {
  toast("successful");
})
errorBtn.addEventListener("click", () => {
  toast("error");
})
invalidBtn.addEventListener("click", () => {
  toast("invalid");
})

let timeoutId;

function toast(message) {
  clearTimeout(timeoutId);
  const toast = document.createElement("div");
  toast.classList.add(`${message}-toast`);
  toast.classList.add(`toast`);
  toast.innerHTML = `<img src="./images/${message}.png" alt="">
  ${message.toUpperCase()}`;
  toastBox.appendChild(toast);
  timeoutId = setTimeout(() => {
    toastBox.innerHTML = "";
  }, 3000);
}