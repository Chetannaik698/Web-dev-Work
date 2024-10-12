let store = document.querySelector("#store");
let large_info = document.querySelector(".large_info");

function upToggle() {
    store.addEventListener("mouseenter", () => {
        large_info.classList.add('up-toggle');
    });
    store.addEventListener("mouseleave", () => {
        large_info.classList.remove('up-toggle');
    });
}

upToggle();
