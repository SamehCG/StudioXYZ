document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        circle.style.left = mouseX + "px";
        circle.style.top = mouseY + "px";
    });
});



// fade in ------------------
