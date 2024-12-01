// JavaScript for Responsive Navbar
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  // Toggle Navbar for Mobile
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Collapse Navbar on Link Click (Mobile)
  navItems.forEach((item) =>
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    })
  );
});
