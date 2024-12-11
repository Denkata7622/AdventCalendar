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
                text: "92% of boys and 97% of girls will lose interest in STEM if they are not immersed before 5th grade." 
            }
        },
        6: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        7: { 
            type: "quiz", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        8: { 
            type: "fact", 
            data: { 
                title: "Decorate Christmas Cookies", 
                text: "In the United States, there are more employment opportunities for skilled scientists than there are applicants to fill them." 
            }
        },
        9: { 
            type: "project", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        10: { 
            type: "quiz", 
            data: { 
                title: "Decorate Christmas Cookies", 
                description: "Bake some sugar cookies and decorate them with frosting and sprinkles!" 
            }
        },
        11: { 
            type: "fact", 
            data: { 
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
                <p>${data.question}</p>
                <button class="btn w-100 rounded-4 my-2 py-2 btn-light border-4 border-custom">A. ${data.answer1}</button>
                <button class="btn w-100 rounded-4 my-2 py-2 btn-light border-4 border-custom">B. ${data.answer2}</button>
                <button class="btn w-100 rounded-4 my-2 py-2 btn-light border-4 border-custom">C. ${data.answer3}</button>
            </div>
        `;
    }

    // Function to generate fact content
    function generateFactContent(data) {
        return `
            <div class="text-center" style="user-select: none;">   
                <p>${data.text}</p>
                <img src="${data.picture}" alt="Fun Fact Image" class="img-fluid rounded-4 my-3"
            </div>
        `;
    }
       

    // Function to generate project content
    function generateProjectContent(data) {
        return `
            <div style="user-select: none;">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            </div>
        `;
    }
    const date = new Date();
    const tempdate = date.getDate();

    let isunlocked = false;
    // Add event listener to each admin button
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

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const day = parseInt(card.querySelector('h1').textContent); // Get the day number
        if(isunlocked){
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
        }else if(day <= tempdate){const challenge = challenges[day]; // Get the challenge for the day

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
        }else{
            alert("Not available today");
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
