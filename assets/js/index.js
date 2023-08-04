let cambio = document.querySelector("input");
let click = 0

function put() {
    if(!put.click) {
        put.click = 1;
        cambio.style.border = "2px solid red";
    }
    else {
        put.click = 0;
        cambio.style.border = "none";
    }
}

