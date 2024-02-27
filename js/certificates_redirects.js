document.addEventListener("DOMContentLoaded", () => {
    let japCard = document.getElementById("jap-card");
    let c2Card = document.getElementById("c2-card");
    let reactAngularCard = document.getElementById("react-angular-card");
    let mvcCard = document.getElementById("MVC5-card");
    let netFullstackCard = document.getElementById("net-fullstack-card");


    japCard.addEventListener("click", () => {
        window.location.href = "./certificates/jap_certificate.pdf";
    });
    c2Card.addEventListener("click", () => {
        window.location.href = "./certificates/StatementOfResult.pdf";
    });
    reactAngularCard.addEventListener("click", () => {
        window.location.href = "./certificates/Coursera-YBDG37FZXV9P.pdf";
    });
    mvcCard.addEventListener("click", () => {
        window.location.href = "./certificates/Coursera-Q22QEC4D4MYA.pdf";
    });
    netFullstackCard.addEventListener("click", () => {
        window.location.href = "./certificates/Coursera-PTHJA8L4AKYP.pdf";
    });
});
