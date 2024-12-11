document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const unlockAll = document.querySelectorAll('.admin-button'); 
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content-body');
    const closeModalButton = document.querySelector('.close-btn');

    // Define content for each day
    const challenges = {
        1: { 
            type: "quiz", 
            data: { 
                day: 1,
                question: "What is the largest ocean on Earth?", 
                answer1: "Atlantic Ocean", 
                answer2: "Indian Ocean", 
                answer3: "Pacific Ocean",
                rightAnswer: "Atlantic Ocean"
            }
        },
        2: { 
            type: "fact", 
            data: {
                day: 1,
                picture: "assets/img/download.jpeg",
                text: "Did you know? The first Christmas card was sent in 1843!" 
            }
        },
        3: { 
            type: "project", 
            data: { 
                day: 1,
                title: "Make a Paper Snowflake", 
                description: "Fold paper into a triangle and cut shapes along the edges. Unfold to reveal your snowflake!" 
            }
        },
        4: { 
            type: "quiz", 
            data: { 
                day: 1,
                question: "Who developed the theory of relativity?", 
                answer1: "Isaac Newton", 
                answer2: "Albert Einstein", 
                answer3: "Galileo Galilei",
                rightAnswer: "Albert Einstein"
            }
        },
        5: { 
            type: "fact", 
            data: { 
                day: 1,
                picture: "assets/img/download.jpeg",
                text: "92% of boys and 97% of girls will lose interest in STEM if they are not immersed before 5th grade." 
            }
        },
        6: { 
            type: "project", 
            data: { 
                day: 1,
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        7: { 
            type: "quiz", 
            data: {
                day: 1,
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        8: { 
            type: "fact", 
            data: { 
                day: 1,
                title: "Decorate Christmas Cookies", 
                text: "In the United States, there are more employment opportunities for skilled scientists than there are applicants to fill them." 
            }
        },
        9: { 
            type: "project", 
            data: {
                day: 1,
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        10: { 
            type: "quiz", 
            data: {
                day: 1,
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        11: { 
            type: "fact", 
            data: {
                day: 1,
                title: "Decorate Christmas Cookies", 
                text: " A third of the world’s population has never used a phone." 
            }
        },
        12: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        13: { 
            type: "quiz", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        14: { 
            type: "fact", 
            data: { 
                title: "Decorate Christmas Cookies", 
                text: "Steve Wozniak and Steve Jobs, who co-founded Apple, originally achieved fame as teenagers by developing the video game named 'Breakout'" 
            }
        },
        15: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        16: { 
            type: "quiz", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        17: { 
            type: "fact", 
            data: { 
                title: "Decorate Christmas Cookies", 
                text: "Pluto was discovered in 1930, but its cycle around the Sun has not yet finished since a Plutonian year is 247.68 times longer than an Earth year." 
            }
        },
        18: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        19: { 
            type: "quiz", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        20: { 
            type: "fact", 
            data: { 
                title: "Decorate Christmas Cookies", 
                text: "More than half of the world’s oxygen is produced by plankton, seaweed, and other photosynthesizers." 
            }
        },
        21: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        22: { 
            type: "quiz", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        23: { 
            type: "fact", 
            data: { 
                title: "Decorate Christmas Cookies", 
                text: "The Pigeon Post: Before email, Charles Darwin relied on a unique communication method: carrier pigeons! These feathered messengers helped him stay connected with fellow scientists across vast distances." 
            }
        },
        24: { 
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
            <div style="user-select: none;">
                <h2 class="fw-bold">Day ${dey}</h2>
                <p class="h5 mt-3 mb-4">${data.question}</p>
                <button class="btn w-100 rounded-4 my-2 py-2 btn-light border-4 border-custom answer" data-answer="${data.answer1}">A. ${data.answer1}</button>
                <button class="btn w-100 rounded-4 my-2 py-2 btn-light border-4 border-custom answer" data-answer="${data.answer2}">B. ${data.answer2}</button>
                <button class="btn w-100 rounded-4 my-2 py-2 btn-light border-4 border-custom answer" data-answer="${data.answer3}">C. ${data.answer3}</button>
                <div class="progress mt-3 mb-2 w-75 mx-auto">
                    <div class="progress-bar w-0" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `;
    }
    
    // Function to generate fact content
    function generateFactContent(data) {
        return `
            <div class="text-center py-3 px-2" style="user-select: none;">
                <h1 class="fw-bold mb-3">Day ${dey}</h1>
                <h3 class="my-3">${data.text}</h3>
                <img src="${data.picture}" alt="Fun Fact Image" class="img-fluid rounded-4 my-3">
            </div>
        `;
    }
       

    // Function to generate project content
    function generateProjectContent(data) {
        return `
            <div class="p-3" style="user-select: none">
                <h2 class="mb-3">Day ${dey}</h2>
                <img src="${data.picture}" alt="Fun Fact Image" class="img-fluid rounded-4 my-3">
                <h5>${data.description}</h5>
            </div>
        `;
    }
    const date = new Date();
    const tempdate = date.getDate();

    // Add event listener to the admin button
    let isunlocked = false;

    unlockAll.forEach(adminButton => {
        adminButton.addEventListener('click', () => {
            // Change the isunlocked to the other state
            isunlocked = !isunlocked;

            if (isunlocked) {
                adminButton.classList.add('btn-success');
                adminButton.classList.remove('btn-danger');
            } else {
                adminButton.classList.add('btn-danger');
                adminButton.classList.remove('btn-success');
            }
        });
    });


// Add event listeners to each answer button dynamically
modalContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer')) {
        const answer = event.target; // Get the clicked answer button
        const correctAnswer = modalContent.querySelector(`[data-answer="${challenges[dey].data.rightAnswer}"]`); // Get the correct answer element
        const progress = modalContent.querySelector('w-0');

        // Disable all buttons after an answer is selected
        const allAnswers = modalContent.querySelectorAll('.answer');
        allAnswers.forEach(button => button.disabled = true);

        // Check if the clicked answer is correct
        if (answer === correctAnswer) {
            // TO:DO - Go to next question
            answer.classList.remove('btn-light');
            answer.classList.add('btn-success'); // Right Answer

            // Change the progress bar
            // TO:DO
            progress.classList.remove('w-0');
            progress.classList.add('w-50')
            
        } else { 
            answer.classList.remove('btn-light');
            answer.classList.add('btn-danger'); // Wrong answer

            // Get the parent container (auto-generated div) of the current question
            const questionContainer = answer.closest('div');

            // Create and add dynamic feedback message
            const feedbackMessage = document.createElement('div');
            feedbackMessage.textContent = 'Wrong Answer! Try again.';
            feedbackMessage.classList.add('feedback-message', 'text-danger', 'mt-2', 'fade-in-out', 'text-center', 'w-50');
            questionContainer.appendChild(feedbackMessage); // Append inside the question container
            setTimeout(() => 
                {  feedbackMessage.remove(); // Remove the message
                    allAnswers.forEach(button => (button.disabled = false));
                    answer.classList.remove('btn-danger');
                    answer.classList.add('btn-light'); 
                }, 2000);
        }
    }
});

// Save the day number for purposes outside the card opening function
let dey = 0;


// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const day = parseInt(card.querySelector('h1').textContent); // Get the day number
        // Save the day number for outside this function
        dey = day;

        if(isunlocked || day <= tempdate){
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
        } else { console.warn(`No challenge found for day ${day}`); }
    } else { alert("Not available today"); }
    });
});

    function closeModal() { modalOverlay.style.display = 'none'; } // Hide the modal 

    // Close the modal from the exit button
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });

    // Close the modal if the user clicks outside the modal content
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});
