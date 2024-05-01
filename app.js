function calculateResult() {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const correctAnswer = selectedOption.value;
            switch (i) {
                case 1:
                    if (correctAnswer === "1917") {
                        score++;
                    }
                    break;
                case 2:
                    if (correctAnswer === "Baikal") {
                        score++;
                    }
                    break;
                case 3:
                    if (correctAnswer === "Mars") {
                        score++;
                    }
                    break;
                case 4:
                    if (correctAnswer === "Leo Tolstoy") {
                        score++;
                    }
                    break;
                case 5:
                    if (correctAnswer === "Tokyo") {
                        score++;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return score; // Moved this line outside the loop
}


function displayResult() {
    const result = calculateResult();
    const resultContainer = document.getElementById('result-container');
    if(result >= 3){
        alert("Passed")
    }
    else{
        alert("Failed")
    }
    resultContainer.innerHTML = `<h1>Your score: ${result}/5</h1>`;
    
}

document.getElementById('submit').addEventListener('click', () => {
    displayResult();
});


