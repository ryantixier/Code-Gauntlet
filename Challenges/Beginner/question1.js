// TODO: Rewrite the following Event Listener using arrow functions

const toggleElements = document.querySelectorAll(".toggle");
toggleElements.forEach(function () {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
