// passphrase.js - Виправлений початок функції

/**
 * Функція приймає вибрану користувачем відповідь, щоб керувати переходами між питаннями.
 * @param {number} currentQuestionNumber - Номер питання.
 * @param {string} correctResponseText - Правильна відповідь (текст).
 * @param {string} userAnswerText - Відповідь, яку передала натиснута кнопка.
 */
function checkAnswer(currentQuestionNumber, correctResponseText, userAnswerText) { 
    
    // Переводимо обидві відповіді у нижній регістр для нечутливості до регістру
    const correctAnsLower = correctResponseText.toLowerCase();
    const userAnsLower = userAnswerText.toLowerCase(); 
    
    // ... решта коду функції залишається незмінною

    // 1. ОТРИМАННЯ ЕЛЕМЕНТІВ ПОТОЧНОГО ПИТАННЯ
    const currentQuizId = "quiz-container-" + currentQuestionNumber;
    const errorMsgId = "error-message-" + currentQuestionNumber;
    
    const currentQuiz = document.getElementById(currentQuizId);
    const errorMessage = document.getElementById(errorMsgId);

    if (userAnsLower === correctAnsLower) {
        // --- ПРАВИЛЬНА ВІДПОВІДЬ ---
        
        // 1. Приховуємо повідомлення про помилку
        if (errorMessage) {
            errorMessage.style.display = "none";
        }
        // 2. Приховуємо поточне питання
        if (currentQuiz) {
            currentQuiz.style.display = "none";
        }

        // 3. ВИЗНАЧЕННЯ НАСТУПНОГО КРОКУ
        const nextQuestionNumber = currentQuestionNumber + 1;
        const nextQuizId = "quiz-container-" + nextQuestionNumber;
        const nextQuiz = document.getElementById(nextQuizId);
        const mainContent = document.getElementById("main-content");

        if (nextQuiz) {
            // Якщо існує наступний контейнер питання (наприклад, перехід від 1 до 2)
            nextQuiz.style.display = "block";
        } else {
            // Якщо наступного питання немає (ми відповіли на останнє, наприклад, 3)
            if (mainContent) {
                mainContent.style.display = "block";
            }
        }

    } else {
        // --- НЕПРАВИЛЬНА ВІДПОВІДЬ ---
        if (errorMessage) {
            errorMessage.style.display = "block";
        }
    }
}