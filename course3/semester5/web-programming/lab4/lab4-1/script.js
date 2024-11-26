const keys = ["Париж", "Нью-Дели", "Сеул", "Анкара", "Претория", "Дамаск"];

const submitButton = document.getElementById("submit-btn");
const resultText = document.getElementById("result-text");

function checkAnswer() {
    let count = 0;
    for (let i = 0; i < keys.length; i++) {
        const ans = document.querySelector(`input[name="q${i + 1}"]:checked`).value;
        if (ans === keys[i]) {
          count++;
        }
    }
    showResult(count);
}

function showResult(count) {
    resultText.innerText = `Результат: ${count}`;
    submitButton.style.display = "none";
}

submitButton.addEventListener("click", checkAnswer);