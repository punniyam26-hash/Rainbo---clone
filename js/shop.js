// Image click (future product action)
const images = document.querySelectorAll(".shop-grid img");

images.forEach(img => {
  img.addEventListener("click", () => {
    alert("Product clicked!");
  });
});

// Mobile hamburger menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}
