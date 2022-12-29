{

    function welcome(){
        console.log("Czołem");
    }

    welcome()

    function change_background() {
        const button = document.querySelector(".main__button");
        const body = document.querySelector("body");
        const theme = document.querySelector(".main__theme--js");

        button.addEventListener("click", () => {
            body.classList.toggle("body__whiteBackground--js");

            if (body.classList.contains("body__whiteBackground--js")) {
                theme.innerText = "szare";
            } else {
                theme.innerText = "białe";
            }
        });
    }
}