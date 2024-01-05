function setScrollAnimation(arrayElements, arrayInitialValues, scrollSpeed) {
    let scrollTop = window.scrollY;
    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].style.bottom =
            arrayInitialValues[i] - scrollTop * scrollSpeed + "px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let grassMiddleBg = document.querySelector(".grass-middle-bg");
    let grassMiddleContainer = document.querySelector(".grass-container-middle");

    let grassFrontBg = document.querySelector(".grass-front-bg");
    let grassFrontContainer = document.querySelector(".grass-container-front");

    let grassBackBg = document.querySelector(".grass-back-bg");
    let grassBackContainer = document.querySelector(".grass-container-back");

    let arrayMiddle = [grassMiddleBg, grassMiddleContainer];
    let arrayFront = [grassFrontBg, grassFrontContainer];
    let arrayBack = [grassBackBg, grassBackContainer];

    document.addEventListener("scroll", () => {
        setScrollAnimation(arrayFront, [0, 0], 0.2);
        setScrollAnimation(arrayMiddle, [0, 100], 0.05);
        setScrollAnimation(arrayBack, [0, 200], 0.02);
    });
});
