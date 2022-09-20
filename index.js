(function() {
  const navbar = document.querySelector('nav.header__nav');
  const menuButton = document.querySelector('button.header__nav-button-menu');
  const promoBanner = document.querySelector('div.header__banner')

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuButton.classList.toggle('open');
    promoBanner.classList.toggle('hidden');
  });

})();