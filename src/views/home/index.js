'use strict';

document.addEventListener('DOMContentLoaded', () => init());

const init = () => {
    // Settings
    const carouselFormComponent = document.querySelector('.p-carousel-form');
    const carouselArticleComponent = document.querySelector('.p-carousel-article');
    const mainComponent = document.querySelector('.p-main');

    const carouselOptions = {
        fullWidth: true,
        indicators: true
    }
    
    const carouselArticle = M.Carousel.init (carouselArticleComponent, carouselOptions);
    const carouselForm = M.Carousel.init (carouselFormComponent, carouselOptions);

    // Setting height (browser resizing and browser load);
    
    const setHeight = () => {
        for (let carousel of [carouselArticleComponent, carouselFormComponent])
            carousel.style.height = `${window.innerHeight}px`
    };

    const setWidth = () => {
        let grid = window.innerWidth > 900 ? 's7': 's12';
    
        mainComponent.classList.remove('s7', 's12');
    
        mainComponent.classList.add(grid);
    }

    setHeight();

    setWidth();

    document.body.onresize = () => {
        setHeight();
        setWidth();
    }
    // Events

    const btnSignUp = document.querySelector('.p-btn-signUp');

    btnSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        carouselForm.next(1);
    });

    // Carousel Article
    setInterval(() => carouselArticle.next(1), 5000);

    // Carousel Form

    // Efeccts 




}