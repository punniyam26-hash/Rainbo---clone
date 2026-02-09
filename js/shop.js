// Image click (future product action)
const images = document.querySelectorAll(".shop-grid img");

images.forEach(img => {
    img.addEventListener("click", () => {
        alert("Product clicked!");
    });
});
