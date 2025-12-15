const form = document.getElementById('bmiForm');
const msg = document.getElementById('msg');
function showMessage(text) {
    msg.textContent = text;
    msg.classList.remove('hidden');
}
function hideMessage() {
    msg.textContent = '';
    msg.classList.add('hidden');
}
form.addEventListener("submit", (e) => {
  hideMessage();

    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);
    
     if (!Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
    e.preventDefault();
    showMessage("Please enter positive numbers for weight and height.");
  }
});
