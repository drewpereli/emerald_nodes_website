export default function setupMobileNav() {
  const openMobileNavBtn = document.getElementById('open-mobile-nav-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const content = document.getElementById('content');

  openMobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });

  content.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
}
