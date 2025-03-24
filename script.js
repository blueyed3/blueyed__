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

document.addEventListener("DOMContentLoaded", () => {
    const apps = document.querySelectorAll('.app');
    const videoScreen = document.querySelector('.video-screen');
    const videoFrame = document.getElementById('video-frame');
    const closeBtn = document.querySelector('.close-btn');

    apps.forEach(app => {
        app.addEventListener('click', () => {
            const videoUrl = app.getAttribute('data-video');
            videoFrame.src = videoUrl;
            videoScreen.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        videoScreen.classList.remove('active');
        videoFrame.src = "";
    });
});


function updateDateTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleTimeString('pl-PL', options);
    const dateString = now.toLocaleDateString('pl-PL');
    document.getElementById('datetime').textContent = `${dateString} | ${timeString}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
