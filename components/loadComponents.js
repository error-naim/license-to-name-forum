document.addEventListener("DOMContentLoaded", function () {
    const loaderScript = Array.from(document.scripts).find(function (script) {
        return script.src && script.src.indexOf("components/loadComponents.js") !== -1;
    });
    const scriptUrl = loaderScript ? loaderScript.src : "";
    const topbarUrl = scriptUrl ? new URL("topbar.html", scriptUrl).toString() : "/components/topbar.html";

    fetch(topbarUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById("topbar-container").innerHTML = data;
        });
});
