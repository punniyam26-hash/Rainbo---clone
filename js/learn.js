// ================= MOBILE NAVIGATION FULL VERSION =================

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const body = document.body;

  // Safety check
  if (!hamburger || !mobileMenu) return;

  // ================= TOGGLE FUNCTION =================
  function toggleMenu() {
    mobileMenu.classList.toggle("active");

    // Lock body scroll when menu open
    if (mobileMenu.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  // ================= OPEN / CLOSE =================
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // ================= CLOSE WHEN LINK CLICKED =================
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      body.style.overflow = "auto";
    });
  });

  // ================= CLOSE WHEN CLICK OUTSIDE =================
  document.addEventListener("click", function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove("active");
      body.style.overflow = "auto";
    }
  });

  // ================= CLOSE WHEN ESC PRESSED =================
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      mobileMenu.classList.remove("active");
      body.style.overflow = "auto";
    }
  });

});
