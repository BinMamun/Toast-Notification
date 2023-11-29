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

let successfulMsg = "Successfully submitted!"
let errorMsg = "Error occured, Please check agin!"
let invalidMsg = "Invalid data!"

function toast(message) {
  const toast = document.createElement("div");
  toast.classList.add(`${message}-toast`);
  toast.classList.add(`toast`);
  if (message === "successful") {
    toast.innerHTML = `<img src="./images/${message}.png">
  ${successfulMsg}`;
  } else if (message === "error") {
    toast.innerHTML = `<img src="./images/${message}.png">
    ${errorMsg}`;
  } else {
    toast.innerHTML = `<img src="./images/${message}.png">
    ${invalidMsg}`;
  }

  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}