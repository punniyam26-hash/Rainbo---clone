// ================= CART =================
let cart = 0;
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".product-card button").forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent card click
    cart++;
    cartCount.innerText = `Cart (${cart})`;
  });
});


// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


// ================= COMMON FILTER FUNCTION =================
function filterProducts(type, value) {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {

    if (value === "all") {
      card.style.display = "block";
    } else {
      card.style.display =
        card.dataset[type] === value ? "block" : "none";
    }

  });
}


// ================= CATEGORY FILTER =================
document.querySelectorAll("[data-filter]").forEach(item => {
  item.addEventListener("click", () => {

    document.querySelectorAll("[data-filter]").forEach(el =>
      el.classList.remove("active")
    );

    item.classList.add("active");

    filterProducts("category", item.dataset.filter);
  });
});


// ================= BENEFIT FILTER =================
document.querySelectorAll(".benefit").forEach(item => {
  item.addEventListener("click", () => {

    document.querySelectorAll(".benefit").forEach(el =>
      el.classList.remove("active")
    );

    item.classList.add("active");

    filterProducts("benefit", item.dataset.benefit);
  });
});


// ================= SEARCH FUNCTION =================
function createSearch() {

  const headerRight = document.querySelector(".right");
  const cartElement = document.getElementById("cartCount");

  const searchIcon = document.createElement("i");
  searchIcon.className = "fas fa-search";
  searchIcon.style.cursor = "pointer";
  searchIcon.style.marginRight = "15px";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search products...";
  searchInput.style.display = "none";
  searchInput.style.marginRight = "15px";

  // 🔥 Insert BEFORE Cart
  headerRight.insertBefore(searchIcon, cartElement);
  headerRight.insertBefore(searchInput, cartElement);

  searchIcon.addEventListener("click", () => {
    searchInput.style.display =
      searchInput.style.display === "none" ? "inline-block" : "none";
  });

  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();

      card.style.display =
        title.includes(value) ? "block" : "none";
    });
  });
}

createSearch();


// ================= CARD CLICK → PRODUCT PAGE =================
document.querySelectorAll(".product-card").forEach(card => {

  card.addEventListener("click", () => {

    const title = card.querySelector("h3").innerText;
    const price = card.querySelector(".price").innerText;
    const img = card.querySelector("img").src;
    const subtitle = card.querySelector(".subtitle").innerText;

    localStorage.setItem("productTitle", title);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productImage", img);
    localStorage.setItem("productSubtitle", subtitle);

    window.location.href = "product.html";
  });

});


// ================= REVIEW MODAL =================
const reviewModal = document.getElementById("reviewModal");
const closeReview = document.getElementById("closeReview");
const reviewProductName = document.getElementById("reviewProductName");
const submitReview = document.getElementById("submitReview");
const reviewText = document.getElementById("reviewText");
const reviewList = document.querySelector(".review-list");
const reviewIcon = document.getElementById("reviewIcon");

// ⭐ PRODUCT CARD REVIEW CLICK (Allow Add Review)
document.querySelectorAll(".rating span").forEach(reviewCount => {

  reviewCount.addEventListener("click", (e) => {
    e.stopPropagation();

    const productName =
      reviewCount.closest(".product-card")
                 .querySelector("h3").innerText;

    reviewProductName.innerText = productName + " Reviews";

    // ✅ Show add review section
    reviewText.style.display = "block";
    submitReview.style.display = "inline-block";

    reviewModal.style.display = "flex";
  });

});


// ⭐ TOP BAR REVIEW ICON CLICK → Coming Soon
if (reviewIcon) {
  reviewIcon.addEventListener("click", () => {
    alert("Coming Soon!"); // ✅ Just show alert
  });
}


// ❌ Close modal
closeReview.addEventListener("click", () => {
  reviewModal.style.display = "none";
});


// ⭐ Submit review
submitReview.addEventListener("click", () => {
  if (reviewText.value.trim() !== "") {
    const newReview = document.createElement("p");
    newReview.innerText = "⭐⭐⭐⭐⭐ " + reviewText.value + " – You";
    reviewList.appendChild(newReview);
    reviewText.value = "";
  }
});


// ================= LOGIN & QUIZ FORCE FIX =================

// Desktop header links
const headerLinks = document.querySelectorAll(".right a");

headerLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const text = link.textContent.trim();

    if (text === "Login" || text === "Take the Quiz") {
      e.preventDefault();
      alert("Coming Soon!");
    }
  });
});

// Mobile menu links
const mobileLinks = document.querySelectorAll(".mobile-links a");

mobileLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const text = link.textContent.trim();

    if (text === "Login" || text === "Take the Quiz") {
      e.preventDefault();
      alert("Coming Soon!");
    }
  });
});