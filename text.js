/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 


    // Add click event listener to each card
    cards.forEach((card) => {
        card.addEventListener('click', () => {
        if (!card.classList.contains('opened')) {
                // Mark card as opened
                card.classList.remove('christmas-spectrum');
                card.classList.add('opened');
                
                // Get the challenge text from the clicked card
                const challenge = card.querySelector('.challenge');
                if (challenge) {
                    // Insert the challenge content into the modal
                    modalBody.innerHTML = challenge.innerHTML;
                }
                
                // Show the modal overlay
                modalOverlay.style.display = 'flex';
            }
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    // Optionally, close the modal if the user clicks outside the modal content
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
});

        // Modal Functions
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContentBody = document.getElementById('modal-content-body');

        // Add click event to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const day = card.id.replace('day-', '');
                openModal(day);
            });
        });

        // Open Modal with dynamic content
        function openModal(day) {
            // Add content for the selected day
            modalContentBody.innerHTML = getDayContent(day);
            modalOverlay.style.display = 'flex';
            modalOverlay.style.opacity = '1'; // Fade-in effect
        }

        // Close Modal
        function closeModal() {
            modalOverlay.style.opacity = '0'; // Fade-out effect
            setTimeout(() => {
                modalOverlay.style.display = 'none';
            }, 300); // Wait for fade-out transition
        }

        // Return content for each day
        function getDayContent(day) {
            switch(day) {
                case '4':
                    return `<h3>Quiz 2</h3>
                            <p>Question 1: What is the smallest planet in our solar system?</p>
                            <ul>
                                <li>A. Earth</li>
                                <li>B. Mercury</li>
                                <li>C. Mars</li>
                            </ul>
                            <p>Question 2: What is the tallest mountain on Earth?</p>
                            <ul>
                                <li>A. Mount Kilimanjaro</li>
                                <li>B. Mount Everest</li>
                                <li>C. K2</li>
                            </ul>`;
                // Add cases for other days here...
                default:
                    return `<p>Content for day ${day} not available yet.</p>`;
            }
        }
