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

    let sun = document.querySelector(".sun");
    let moon = document.querySelector(".moon");

    let arrayMiddle = [grassMiddleBg, grassMiddleContainer];
    let arrayFront = [grassFrontBg, grassFrontContainer];
    let arrayBack = [grassBackBg, grassBackContainer];

    document.addEventListener("scroll", () => {
        setScrollAnimation(arrayFront, [0, 0], 0.2);
        setScrollAnimation(arrayMiddle, [0, 100], 0.05);
        setScrollAnimation(arrayBack, [0, 200], 0.02);

        const scrollPercentage =
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100;
        if (scrollPercentage >= 50) {
            [...arrayBack, ...arrayMiddle, ...arrayFront].forEach((grass) => {
                grass.style.filter = "hue-rotate(120deg) brightness(0.5)";
            });
            document.body.style.backgroundColor = "#03045e";

            if (moon.classList.contains("moon-transition")) {
                moon.classList.remove("moon-transition");
            }
            if (!sun.classList.contains("sun-transition")) {
                sun.classList.add("sun-transition");
            }
        } else {
            [...arrayBack, ...arrayMiddle, ...arrayFront].forEach((grass) => {
                grass.style.filter = "";
            });
            document.body.style.backgroundColor = "#00b4d8";
            if (!moon.classList.contains("moon-transition")) {
                moon.classList.add("moon-transition");
            }
            if (sun.classList.contains("sun-transition")) {
                sun.classList.remove("sun-transition");
            }
        }
    });
});
