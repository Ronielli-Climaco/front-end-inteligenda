document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".agendamento-form");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const barbeiro = form.Barbeiro.value;
        const data = form['data-selecionada'].value;
        const horario = form['horario-selecionado'].value;

        const confirmar = confirm(`Deseja confirmar o agendamento com ${barbeiro} em ${data} às ${horario}?`);
        if (!confirmar) {
            mensagem.textContent = "Agendamento cancelado.";
            mensagem.style.color = "red";
            return; 
        }

        mensagem.innerHTML = "Agendamento confirmado!";
        mensagem.style.color = "green";
        mensagem.style.textAlign = "center";

    })
})