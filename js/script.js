document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinksContainer = document.querySelector('.navbar-links');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop - navbarHeight;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
  
        // Close the menu after clicking a link (on mobile)
        if (window.innerWidth <= 767) {
          navbarLinksContainer.classList.remove('show');
        }
      });
    });
  
    menuToggle.addEventListener('click', function() {
      navbarLinksContainer.classList.toggle('show');
    });
  });
  















// document.addEventListener('DOMContentLoaded', function() {
//   const navbarLinks = document.querySelectorAll('.navbar a');
//   const navbarHeight = document.querySelector('.navbar').offsetHeight;

//   navbarLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//           event.preventDefault();
//           const targetId = this.getAttribute('href').substring(1);
//           const targetElement = document.getElementById(targetId);
//           const targetPosition = targetElement.offsetTop - navbarHeight;

//           window.scrollTo({
//               top: targetPosition,
//               behavior: 'smooth'
//           });
//       });
//   });
// });