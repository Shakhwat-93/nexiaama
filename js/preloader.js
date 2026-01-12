// Premium Preloader Logic
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('premium-preloader');

    function hidePreloader() {
        // Immediately fade out
        preloader.classList.add('fade-out');
        document.body.classList.remove('preloader-active');

        // Remove from DOM after transition matches CSS transition time (0.8s)
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }

    if (document.readyState === "complete") {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }

    // Fallback safety in case load event fails or hangs
    setTimeout(hidePreloader, 10000);
});

// Ensure body is hidden/no-scroll initially
document.body.classList.add('preloader-active');
