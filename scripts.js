// Get the modal element, open button, and close button
const modal = document.querySelector(".shadow-box");
const openModalButton = document.querySelector(".hero_cta-btn");
const closeModalButton = document.querySelector(".shadow-box_closeButton");

// Event listener to open the modal by adding 'show' class
openModalButton.addEventListener("click", () => {
  modal.classList.add("shadow-box--visible");
});

// Event listener to close the modal by removing 'show' class
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("shadow-box--visible");
});

// Optional: Close the modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("shadow-box--visible");
  }
});
