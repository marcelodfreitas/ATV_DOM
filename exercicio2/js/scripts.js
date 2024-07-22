let cliques = 0;

        function incrementar() {
            cliques++;
            const contador = document.getElementById("contador");
            contador.textContent = `O contador está com ${cliques} cliques`;
            contador.style.display = 'block';
        }

        function zerarContador() {
            cliques = 0;
            const contador = document.getElementById("contador");
            contador.style.display = 'none';
        }