/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

document.addEventListener('DOMContentLoaded', () => {
    // Select all cards
    const cards = document.querySelectorAll('.card');

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('opened')) {
                // Remove the animation and mark as "opened"
                card.classList.remove('christmas-spectrum');
                card.classList.add('opened');
            }
        });
    });
});
