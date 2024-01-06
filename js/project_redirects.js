document.addEventListener("DOMContentLoaded", () => {
    let crypted = document.getElementById("crypted-card");
    let emercado = document.getElementById("emercado-card");
    let portfolio = document.getElementById("portfolio-card");

    crypted.addEventListener("click", () => {
        window.location.href = "../projects/crypted.html";
    });
    emercado.addEventListener("click", () => {
        window.location.href = "../projects/emercado.html";
    });
    portfolio.addEventListener("click", ()=>{
        window.location.href = "../projects/portfolio.html";
    });
});
