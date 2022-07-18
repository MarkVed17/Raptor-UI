const baselinetoast = document.querySelector("#baseline-toast");
const leadingtoast = document.querySelector("#leading-toast");
const stackedtoast = document.querySelector("#stacked-toast");

const toastBtns = document.querySelectorAll(".showToast-btn");
const toastIcons = document.querySelectorAll(".toast-icon");

const showToast = (e) => {
  const toast = e.target.getAttribute("data-button");
  document.querySelector(`#${toast}-toast`).classList.add("showToast");

  setTimeout(
    () =>
      document
        .querySelector(`#${toast}-toast`)
        .classList.remove("showToast"),
    3000
  );
};

const hideToast = (e) => {
  const toast = e.target.getAttribute("data-toast");
  document
    .querySelector(`#${toast}-toast`)
    .classList.remove("showToast");
};

toastBtns.forEach((toastBtn) =>
  toastBtn.addEventListener("click", showToast)
);
toastIcons.forEach((toastIcon) =>
  toastIcon.addEventListener("click", hideToast)
);
