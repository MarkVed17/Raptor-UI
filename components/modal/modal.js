const simpleModalButton = document.querySelector("#simple-modal-btn");
const simpleModal = document.querySelector("#simple-modal");
const choiceModalButton = document.querySelector("#choice-modal-btn");
const choiceModal = document.querySelector("#choice-modal");

simpleModalButton.addEventListener("click", () => simpleModal.showModal());
choiceModalButton.addEventListener("click", () => choiceModal.showModal());
