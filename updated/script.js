document.addEventListener("DOMContentLoaded", function () {
    const featureBoxes = document.querySelectorAll('.feature-long-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                entry.target.classList.remove('slide-out');
            } else {
                entry.target.classList.remove('slide-in');
                entry.target.classList.add('slide-out');
            }
        });
    }, {
        threshold: 0.3
    });

    featureBoxes.forEach(box => {
        observer.observe(box);
    });
});
