window.addEventListener("DOMContentLoaded", () => {

    const banner = document.querySelector(".banner");

    const imagens = [
        "Image/bn2.png",
         "Image/bn3.png"
    ];

    let index = 0;

    setInterval(() => {
        index = (index + 1) % imagens.length;
        banner.src = imagens[index];
    }, 7000);

});