document.addEventListener("DOMContentLoaded", () => {
    let grassMiddleBg = document.querySelector(".grass-middle-bg");
    let grassMiddleContainer = document.querySelector(".grass-container-middle");

    document.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        grassMiddleContainer.style.bottom = 100 - scrollTop * 0.05 + "px";
        grassMiddleBg.style.bottom = -scrollTop * 0.05 + "px";
        console.log(grassMiddleContainer)
    });
});
