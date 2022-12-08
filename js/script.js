console.log("Czołem");

let button = document.querySelector(".main__button");
let body = document.querySelector("body");
let theme = document.querySelector(".main__theme--js");

button.addEventListener("click", () => {
    body.classList.toggle("body__whiteBackground--js");

    if (body.classList.contains("body__whiteBackground--js")) {
        theme.innerText = "szare";
    } else {
        theme.innerText = "białe";
    }
});
