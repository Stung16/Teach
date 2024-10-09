const btn = document.querySelector(".btn");
const ovelay = document.querySelector(".ovelay");
const modalBox = document.querySelector(".modal-box");
const btn_close = document.querySelector(".modal-header span");

const handleOpenModel = function () {
  modalBox.classList.add("active");
};
const handleCloseModel = function () {
  modalBox.classList.remove("active");
};
btn.addEventListener("click", handleOpenModel);
ovelay.addEventListener("click", handleCloseModel);
btn_close.addEventListener("click", handleCloseModel);
