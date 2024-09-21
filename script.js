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
  