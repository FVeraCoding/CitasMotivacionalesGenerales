const textoCita = document.getElementById("texto-cita");
const autor = document.getElementById("autor");
const boton = document.getElementById("boton");



function nuevaCita(){
    let elementoAleatorio = citas[Math.floor(Math.random() * citas.length)];
    textoCita.textContent = `"${elementoAleatorio.texto}"`;
    autor.textContent = elementoAleatorio.autor;
}

nuevaCita();


boton.addEventListener("click", nuevaCita);
