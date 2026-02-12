(function () {

    const faviconFrames = [
        "../favicons/frame0.png",
        "../favicons/frame1.png",
        "../favicons/frame2.png",
        "../favicons/frame3.png"
    ];

    let faviconIndex = 0;
    let interval = null;

    function startAnimation() {
        if (interval) return;

        interval = setInterval(() => {
            const faviconElement = document.getElementById("favicon");
            if (!faviconElement) return;

            faviconIndex = (faviconIndex + 1) % faviconFrames.length;
            faviconElement.href = faviconFrames[faviconIndex] + "?v=" + Date.now();
        }, 250);
    }

    function stopAnimation() {
        if (!interval) return;
        clearInterval(interval);
        interval = null;
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        startAnimation();
    });

})();