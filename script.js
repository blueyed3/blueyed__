document.addEventListener("DOMContentLoaded", function () {
    function typeWriterEffect(element, text, speed, index = 0) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeWriterEffect(element, text, speed, index + 1), speed);
        }
    }

    const elements = document.querySelectorAll(".typewriter");
    elements.forEach((el, idx) => {
        const text = el.textContent;
        el.textContent = "";
        setTimeout(() => typeWriterEffect(el, text, 200), idx * 500); // Wolniejsze pisanie (200ms)
    });
});