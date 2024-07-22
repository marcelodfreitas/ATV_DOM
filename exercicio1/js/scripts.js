function mudarTexto() {
    const nome = prompt("Digite o seu nome:");
    if (nome) {
        const texto = document.getElementById("texto");
        texto.textContent = `E aí ${nome}! Você está deixando o seu site dinâmico.`;
    }
}