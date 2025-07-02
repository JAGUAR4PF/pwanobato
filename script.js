console.log("Website loaded successfully!");
// Show/hide the back-to-top button
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top when button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
