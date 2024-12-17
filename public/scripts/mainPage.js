const images = document.querySelectorAll('.hero__image');

images.forEach(image => {
    gsap.to(image, {
        scale: 1.02,          
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const galleryElement = document.querySelector('.gallery');

    lightGallery(galleryElement, {
        plugins: [lgZoom], // подключаем плагин зума
        speed: 500,        // скорость анимации
        mode: 'lg-fade',   // режим перехода
        zoom: true,         // включаем увеличение
        closable: true,
    });
});