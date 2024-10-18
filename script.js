var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
        const externalLoginBtn = document.getElementById('login-btn'); // New button reference


        // Add this event listener for the new "Login" button
        externalLoginBtn.addEventListener('click', () => {
          window.location.href = 'login.html'; // Redirect to login.html
      });
      
      // Get the elements
const searchInput = document.getElementById('search-input');
const searchPage = document.getElementById('search-page');
const cancelBtn = document.getElementById('cancel-btn');
const searchBox = document.querySelector('.search-box'); // Get the search box div

// Show the search overlay when the search box is clicked
searchBox.addEventListener('click', () => {
  searchPage.style.display = 'block';
  searchInput.blur(); // Remove focus from the small input
});

// Hide the search overlay when the cancel button is clicked
cancelBtn.addEventListener('click', () => {
  searchPage.style.display = 'none';
});

// script.js

// This can be expanded to manage cart functionality
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

