// Button aur inputs ko select kar liya
const submitBtn = document.getElementById("submitBtn");
const keyInput = document.getElementById("key");
const successMessage = document.getElementById("successMessage");

// Key input ke change hone pe check karte hain
keyInput.addEventListener("input", () => {
  if (keyInput.value.toLowerCase() === "nishant") {
    // Agar Nishant likh diya to button ko bhaagna band kar diya
    submitBtn.classList.remove("running");
  }
});

// Button click hone pe check karte hain
submitBtn.addEventListener("click", () => {
  if (keyInput.value.toLowerCase() === "nishant") {
    // Sahi answer diya to success message dikhao
    successMessage.classList.add("active");
    alert("Form submitted successfully!"); // Notification dena zaroori hai
  } else {
    // Galat answer pe button bhaag jayega 😜
    submitBtn.classList.add("running");
  }
});
