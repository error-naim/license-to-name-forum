document.addEventListener("DOMContentLoaded", function () {
    const scriptUrl = document.currentScript ? document.currentScript.src : "";
    const topbarUrl = scriptUrl ? new URL("topbar.html", scriptUrl).toString() : "../components/topbar.html";

    fetch(topbarUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById("topbar-container").innerHTML = data;
        });
});
