document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let total = 5;
    let results = document.getElementById("results");
    results.innerHTML = "";

    const answers = {
        q1: "pixel architect",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: ["a, c, d"]
    };

    // Question 1
    let q1 = document.getElementById("q1").value.trim().toLowerCase();
    if (q1 === answers.q1) score++;

    // Question 2-4

    for (let i = 2; i <= 4; i++) {
        let selected = document.querySelector(`input[name=q${i}]:checked`);
        if (selected && selected.value === answers[`q${i}`]) score++;
    }

    // Question 5
    let selectedBoxes = document.querySelectorAll('input[name="q5"]:checked');
    let values = Array.from(selectedBoxes).map(cb => cb.value);
    if (JSON.stringify(values.sort()) === JSON.stringify(answers.q5.sort())) score++;

    let pass = score >= 3 ? "PASS" : "FAIL";
    results.innerHTML = `<h3>Your Score: ${score}/${total} - ${pass}</h3>`;

    results.style.color = score >= 3 ? "green" : "red";
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
});
