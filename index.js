(function() {
  // Nav button
  const navbar = document.querySelector('nav.header__nav');
  const menuButton = document.querySelector('button.header__nav-button-menu');
  const promoBanner = document.querySelector('div.header__banner')

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuButton.classList.toggle('open');
    promoBanner.classList.toggle('hidden');
  });
  // end nav button

  // hero image
  function heroImageHandler() {
    const heroEl = document.querySelector('section.hero');
    setInterval(() => {
      heroEl.classList.toggle('hero--2');
    }, 3000);
  }
  heroImageHandler();
  // end hero image

  // popular item
  class PopularItem {
    constructor(el, favoriteElement, starsContainer) {
      this.el = document.querySelector(el);
      this.favoriteElement = this.el.querySelector(favoriteElement);
      this.starsContainer = this.el.querySelector(starsContainer);
    }
    handleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.favoriteElement.classList.toggle('active');
    }
    handleRating(amount) {
      this.stars = amount;
      this.starsContainer.className = '';
    }
    init() {
      this.favoriteElement.addEventListener('click', this.handleFavorite.bind(this));
    }
  }

  class PopularMenItem extends PopularItem {
    constructor(el, favoriteElement, isFavorite, starsContainer, star) {
      super(el, favoriteElement, isFavorite, starsContainer, star);
    }
    handleRating(amount) {
      this.stars = amount;
      this.starsContainer.className = `populars-men__item-star-container populars-men__item-star-container--${amount}`;
    }
    init() {
      this.favoriteElement.addEventListener('click', this.handleFavorite.bind(this));
      
      const stars = this.el.querySelectorAll('.populars-men__item-star');
      stars.forEach((el, index) => {
        el.addEventListener('click', () => {
          this.handleRating(index + 1)
        });
      })
    }
  }

  class PopularWomenItem extends PopularItem {
    constructor(el, favoriteElement, isFavorite, starsContainer, star) {
      super(el, favoriteElement, isFavorite, starsContainer, star);
    }
    handleRating(amount) {
      this.stars = amount;
      this.starsContainer.className = `populars-women__item-star-container populars-women__item-star-container--${amount}`;
    }
    init() {
      this.favoriteElement.addEventListener('click', this.handleFavorite.bind(this));
      
      const stars = this.el.querySelectorAll('.populars-women__item-star');
      stars.forEach((el, index) => {
        el.addEventListener('click', () => {
          this.handleRating(index + 1)
        });
      })
    }
  }

  const menItem1 = new PopularMenItem('#men-1', '.populars-men__item-heart', '.populars-men__item-star-container');
  menItem1.init();
  const menItem2 = new PopularMenItem('#men-2', '.populars-men__item-heart', '.populars-men__item-star-container');
  menItem2.init();
  const menItem3 = new PopularMenItem('#men-3', '.populars-men__item-heart', '.populars-men__item-star-container');
  menItem3.init();  
  const menItem4 = new PopularMenItem('#men-4', '.populars-men__item-heart', '.populars-men__item-star-container');
  menItem4.init();

  const womenItem1 = new PopularWomenItem('#women-1', '.populars-women__item-heart', '.populars-women__item-star-container');
  womenItem1.init();
  const womenItem2 = new PopularWomenItem('#women-2', '.populars-women__item-heart', '.populars-women__item-star-container');
  womenItem2.init();
  const womenItem3 = new PopularWomenItem('#women-3', '.populars-women__item-heart', '.populars-women__item-star-container');
  womenItem3.init();  
  const womenItem4 = new PopularWomenItem('#women-4', '.populars-women__item-heart', '.populars-women__item-star-container');
  womenItem4.init();

})();