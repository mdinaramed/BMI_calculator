const params = new URLSearchParams(window.location.search);
const error = params.get("error");
const bmi = params.get("bmi");
const label = params.get("label");
const css = params.get("css");

const errorBox = document.getElementById("errorBox");
const resultBox = document.getElementById("resultBox");

if (error === "1" || !bmi || !label || !css) {
  errorBox.classList.remove("hidden");
} else {
  document.getElementById("bmiValue").textContent = bmi;
  document.getElementById("bmiLabel").textContent = label;

  resultBox.classList.remove("hidden");
  resultBox.classList.add(css);
}