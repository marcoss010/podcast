// Botão Curtir
function curtir(button) {
    let count = button.querySelector("span");
    count.textContent = parseInt(count.textContent) + 1;
}
