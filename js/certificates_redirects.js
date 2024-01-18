document.addEventListener("DOMContentLoaded", () => {
    let japCard = document.getElementById("jap-card");
    let c2Card = document.getElementById("c2-card");

    japCard.addEventListener("click", () => {
        window.location.href = "./certificates/jap_certificate.pdf";
    });
    c2Card.addEventListener("click", () => {
        window.location.href = "./certificates/StatementOfResult.pdf";
    });
});
