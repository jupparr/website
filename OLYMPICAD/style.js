// AWAL DARK MODE & LIGHT MODE
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
        html.setAttribute("data-bs-theme", "light");
    } else {
        html.setAttribute("data-bs-theme", "dark");
    }
}
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

// Load saat pertama buka
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-bs-theme", savedTheme);
    }
});
// AKHIR DARK MODE & LIGHT MODE
// AWAL SOAL
function checkAnswer(button, isCorrect) {
    let buttons = document.querySelectorAll(".answer-btn");
    let result = document.getElementById("result");

    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add("btn-success");
        result.innerHTML = "Jawaban Benar!";
        result.style.color = "green";
    } else {
        button.classList.add("btn-danger");
        result.innerHTML = "Jawaban Salah!";
        result.style.color = "red";
    }
}
// AKHIR SOAL
// AWAL CEK SOAL
function checkAnswer1(button, isCorrect) {
    let buttons = document.querySelectorAll(".answer-btn");
    let result = document.getElementById("result");

    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        window.location.href = "hasil.html";
    } else {
        button.classList.add("btn-danger");
        result.innerHTML = "Jawaban Salah!";
        result.style.color = "red";
    }
}

// AKHIR CEK SOAL
// AWAL BLOCKIR MOBILE
  function initAOS() {
    if (window.innerWidth > 768) {
      AOS.init({
        duration: 800,
        once: true
      });
    }
  }

  window.addEventListener("load", initAOS);
// AKHIR BLOKIR MOBILE