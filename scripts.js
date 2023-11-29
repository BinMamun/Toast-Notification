const toastBox = document.querySelector(".js-toast-box");
const succefullBtn = document.querySelector(".js-successful-btn");
const errorBtn = document.querySelector(".js-error-btn");
const invalidBtn = document.querySelector(".js-invalid-btn");

succefullBtn.addEventListener("click", () => {
  toast("successful");
  setTimeout(() => {
    toastBox.innerHTML = "";
  }, 3000);
})
errorBtn.addEventListener("click", () => {
  toast("error");
  setTimeout(() => {
    toastBox.innerHTML = "";
  }, 3000);
})
invalidBtn.addEventListener("click", () => {
  toast("invalid");
  setTimeout(() => {
    toastBox.innerHTML = "";
  }, 3000);
})

function toast(message) {
  const toast = document.createElement("div");
  toast.classList.add(`${message}-toast`);
  toast.classList.add(`toast`);
  toast.innerHTML = `<img src="./images/${message}.png" alt="">
  ${message.toUpperCase()}`;
  toastBox.appendChild(toast);
}