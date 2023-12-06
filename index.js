const formEle = document.querySelector(".form");
const inputEle = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const messageEle = document.querySelector(".message");

const emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi;

const submitHandler = (event) => {
  event.preventDefault();

  const userInput = inputEle.value;
  messageEle.classList.remove("success");
  messageEle.classList.remove("error");
  formEle.classList.remove("form-error");
  formEle.classList.remove("form-success");

  if (emailReg.test(userInput)) {
    void messageEle.offsetWidth;
    formEle.classList.add("form-success");
    messageEle.classList.add("success");
    messageEle.innerText = "Thank you. You email has been registered!";
    inputEle.value = "";
  } else {
    void messageEle.offsetWidth;
    formEle.classList.add("form-error");
    messageEle.classList.add("error");
    messageEle.innerText = "Please provide a valid email address.";
  }
};

submitBtn.addEventListener("click", submitHandler);
