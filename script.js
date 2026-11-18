
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

// Mobile navigation
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("active");

  menuButton.textContent =
    navigation.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuButton.textContent = "☰";
  });
});

// Automatic footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
