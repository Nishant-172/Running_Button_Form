const submitBtn = document.getElementById("submitBtn");
const keyInput = document.getElementById("key");
const successMessage = document.getElementById("successMessage");

keyInput.addEventListener("input", () => {
  if (keyInput.value.toLowerCase() === "nishant") {
    submitBtn.classList.remove("running");
  }
});

submitBtn.addEventListener("click", () => {
  if (keyInput.value.toLowerCase() === "nishant") {
    successMessage.classList.add("active");
    alert("Form submitted successfully!");
  } else {
    submitBtn.classList.add("running");
  }
});
