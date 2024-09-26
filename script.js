const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// Retrieve the stored mode from localStorage and apply it
const storedMode = JSON.parse(localStorage.getItem("mode"));
if (storedMode) {
    inputEl.checked = true;
    bodyEl.classList.add("dark-mode");
} else {
    inputEl.checked = false;
    bodyEl.classList.remove("dark-mode");
}

// Update the body background based on the toggle state
function updateBody() {
    if (inputEl.checked) {
        bodyEl.classList.add("dark-mode");
    } else {
        bodyEl.classList.remove("dark-mode");
    }
}

// Event listener to handle the toggle switch changes
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

// Update localStorage with the current mode (dark/light)
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
