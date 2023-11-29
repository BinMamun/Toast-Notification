const toastBox = document.querySelector(".js-toast-box");
const succefullBtn = document.querySelector(".js-successful-btn");
const errorBtn = document.querySelector(".js-error-btn");
const invalidBtn = document.querySelector(".js-invalid-btn");
const infoBtn = document.querySelector(".js-info-btn");


succefullBtn.addEventListener("click", () => {
  toast("successful");
})
errorBtn.addEventListener("click", () => {
  toast("error");
})
invalidBtn.addEventListener("click", () => {
  toast("invalid");
})

infoBtn.addEventListener("click", () => {
  toast("info");
})


function toast(message) {
  const toast = document.createElement("div");
  toast.classList.add(`${message}-toast`);
  toast.classList.add(`toast`);

  if (message === "successful") {
    toast.innerHTML = `<img src="./images/${message}.png">
  ${showMessage(message)}<img class="close-icon js-close-icon" src="./images/close.png">`;
  } else if (message === "error") {
    toast.innerHTML = `<img src="./images/${message}.png">
    ${showMessage(message)}<img class="close-icon" src="./images/close.png">`;
  } else if (message === "info") {
    toast.innerHTML = `<img src="./images/${message}.png">
    ${showMessage(message)}<img class="close-icon" src="./images/close.png">`;
  } else {
    toast.innerHTML = `<img src="./images/${message}.png">
    ${showMessage(message)}<img class="close-icon" src="./images/close.png">`;
  }

  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}


function showMessage(message) {
  const msg = {
    successful: "Successfully submitted!",
    error: "Error occured, check agin!",
    info: "This is an info toast!",
    invalid: "This is an info toast!"
  }
  if (message === "successful") {
    return msg.successful;
  } else if (message === "error") {
    return msg.error;
  } else if (message === "info") {
    return msg.info;
  } else {
    return msg.invalid;
  }
}