function setScrollAnimation(arrayElements, arrayInitialValues, scrollSpeed){
    let scrollTop = window.scrollY;
    for (let i = 0; i<arrayElements.length; i++){
        arrayElements[i].style.bottom = arrayInitialValues[i] - scrollTop * scrollSpeed + "px";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let grassMiddleBg = document.querySelector(".grass-middle-bg");
    let grassMiddleContainer = document.querySelector(".grass-container-middle");
    let grassFrontBg = document.querySelector(".grass-front-bg");
    let grassFrontContainer = document.querySelector(".grass-container-front");

    document.addEventListener("scroll", () => {
        let arrayMiddle = [grassMiddleBg, grassMiddleContainer];
        let arrayFront = [grassFrontBg, grassFrontContainer];
        setScrollAnimation(arrayMiddle, [0, 100], 0.05);
        setScrollAnimation(arrayFront, [0, 0], 0.2);
    });
});
