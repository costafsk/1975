'use strict';

document.addEventListener('DOMContentLoaded', () => init());

const init = () => {
    const carouselComponent = document.querySelector('.carousel');

    const carouselOptions = {
        fullWidth: true,
        indicators: true
    }

    const carousel = M.Carousel.init(carouselComponent, carouselOptions);

    const setHeight = () => carouselComponent.style.height = `${window.innerHeight}px`;
    
    // Setting height (init);
    setHeight();
    
    // Setting height (browser resizing);
    document.body.onresize = () => setHeight();

    setInterval(() => {
        carousel.next(1);
    }, 5000);
        
}