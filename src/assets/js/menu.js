// const burgerMenu = document.querySelector('.menu');
// const modalOverlay = document.querySelector('.overlay');
// const closeModal = document.querySelector('.overlay__close');
// const mobileNavLinks = document.querySelectorAll('.overlay__nav a');

// burgerMenu.addEventListener('click', function() {
//     modalOverlay.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// });

// closeModal.addEventListener('click', function() {
//     modalOverlay.style.display = 'none';
//     document.body.style.overflow = 'auto';
// });

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu'); // Замените на ваш селектор кнопки меню
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.overlay__close'); // Замените на ваш селектор кнопки закрытия

    menuButton.addEventListener('click', function() {
        overlay.style.display = 'block'; // Показываем оверлей
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none'; // Скрываем оверлей
    });
});

