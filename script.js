const sobre = document.getElementById("sobre");
const musica = document.getElementById("musica");
const boton = document.getElementById("musicaBtn");

sobre.onclick = function () {

    sobre.classList.toggle("abierto");

    if (sobre.classList.contains("abierto")) {

        musica.play().catch(function(error) {
            console.log("La música necesita interacción del usuario.");
        });

        boton.innerHTML = "⏸️ Pausar música";

    }

};


boton.onclick = function (event) {

    event.stopPropagation();

    if (musica.paused) {

        musica.play();

        boton.innerHTML = "⏸️ Pausar música";

    } else {

        musica.pause();

        boton.innerHTML = "🎵 Reproducir música";

    }

};