document.getElementById("menuBtn").addEventListener("click", function() {
    document.getElementById("navMenu").classList.toggle("open");
});

function evaluateQuiz() {
    let score = 0;
    let resultBox = document.getElementById("quizResult");
    resultBox.innerHTML = "";

    let q1 = document.getElementById("q1").value.tolowerCase().trim();
    if (q1 === "pixel architect") score++;

    if (document.querySelector('input[name="q2"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "b") score++;

    let selectedQ5 = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(cb => cb.value);
    let correctQ5 = ["a", "c", "d"];
    if (JSON.stringify(selectedQ5.sort()) === JSON.stringify(correctQ5.sort())) score++;
}

resultBox.innerHTML = `<h3>Your Score: ${score}/5 - ${score >= 3 ? "PASS" : "FAIL"}</h3>`;
    resultBox.style.color = score >= 3 ? "green" : "red"
    ;


const form = document.getElementById("quizForm");
if (form) {
    form.addEventListener("submit", function() {
        event.preventDefault();
        evaluateQuiz();
    });

}