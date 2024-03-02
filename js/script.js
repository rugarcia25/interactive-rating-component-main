const container = document.querySelector(".container");
const thanks = document.querySelector(".thanks-rate");
const submit = document.getElementById("submit");
const rating = document.getElementById("vote");
const options = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
  thanks.classList.remove("hidden");
  container.style.display = "none";
});

options.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
