
document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

});
