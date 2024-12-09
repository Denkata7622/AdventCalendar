document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content-body');
    const closeModalButton = document.querySelector('.close-btn');

    // Define content for each day
    const challenges = {
        1: { 
            type: "quiz", 
            data: { 
                question: "What is the largest ocean on Earth?", 
                answer1: "Atlantic Ocean", 
                answer2: "Indian Ocean", 
                answer3: "Pacific Ocean" 
            }
        },
        2: { 
            type: "fact", 
            data: { 
                picture: "assets/img/download.jpeg",
                text: "Did you know? The first Christmas card was sent in 1843!" 
            }
        },
        3: { 
            type: "project", 
            data: { 
                title: "Make a Paper Snowflake", 
                description: "Fold paper into a triangle and cut shapes along the edges. Unfold to reveal your snowflake!" 
            }
        },
        4: { 
            type: "quiz", 
            data: { 
                question: "Who developed the theory of relativity?", 
                answer1: "Isaac Newton", 
                answer2: "Albert Einstein", 
                answer3: "Galileo Galilei" 
            }
        },
        5: { 
            type: "fact", 
            data: { 
                picture: "https://via.placeholder.com/150", 
                text: "Christmas is celebrated in more than 160 countries!" 
            }
        },
        6: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
    };

    // Function to generate quiz content
    function generateQuizContent(data) {
        return `
            <p>${data.question}</p>
            <button class="w-100 rounded-4 my-2 py-2 bg-danger">A. ${data.answer1}</button>
            <button class="w-100 rounded-4 my-2 py-2 bg-warning">B. ${data.answer2}</button>
            <button class="w-100 rounded-4 my-2 py-2 bg-success">C. ${data.answer3}</button>
        `;
    }

    // Function to generate fact content
    function generateFactContent(data) {
        return `
            <div class="text-center">
                     onerror="this.src='https://via.placeholder.com/300'" />
                <p>${data.text}</p>
                <img src="${data.picture}" alt="Fun Fact Image" class="img-fluid rounded-4 my-3"
            </div>
        `;
    }
       

    // Function to generate project content
    function generateProjectContent(data) {
        return `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
        `;
    }


// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const date = new Date();
        const tempdate = date.getDate();
        const day = parseInt(card.querySelector('h1').textContent); // Get the day number
        if(day <= tempdate){
        const challenge = challenges[day]; // Get the challenge for the day

        if (challenge) {
            // Generate content based on challenge type
            let content = "";
            switch (challenge.type) {
                case "quiz":
                    content = generateQuizContent(challenge.data);
                    break;
                case "fact":
                    content = generateFactContent(challenge.data);
                    break;
                case "project":
                    content = generateProjectContent(challenge.data);
                    break;
            }

            // Insert content into modal
            modalContent.innerHTML = content;

            // Check if the card is already opened
            if (!card.classList.contains('opened')) {
                card.classList.remove('christmas-spectrum'); // Remove initial class
                card.classList.add('opened'); // Mark the card as opened
            }

            // Show the modal overlay
            modalOverlay.style.display = 'flex';
        } else {
            console.warn(`No challenge found for day ${day}`);
        }
        }
    });
});


    // Close the modal
    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none'; // Hide the modal
    });

    // Close the modal if the user clicks outside the modal content
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none'; // Hide the modal if clicked outside
        }
    });
});
