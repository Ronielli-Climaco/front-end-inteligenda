document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".agendamento-form");
    const mensagem = document.getElementById("mensagem");
    const telInput = document.getElementById("tel-cliente");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const barbeiro = form.Barbeiro.value;
        const data = form['data-selecionada'].value;
        const horario = form['horario-selecionado'].value;

        // Limpa campos de texto
        form.reset();

        // Limpa os selects com Choices.js
        escolhaBarbeiro.clearStore();
        escolhaHorario.clearStore();

        // Limpa o Flatpickr
        const datePicker = document.querySelector('#data-selecionada')._flatpickr;
        datePicker.clear();

        const confirmar = confirm(`Deseja confirmar o agendamento com ${barbeiro} em ${data} às ${horario}?`);
        if (!confirmar) {
            mensagem.textContent = "Agendamento cancelado.";
            mensagem.style.color = "red";
            mensagem.style.textAlign = "center";
            return; 
        }

        mensagem.innerHTML = "Agendamento confirmado!";
        mensagem.style.color = "green";
        mensagem.style.textAlign = "center";    
    })

    telInput.addEventListener("input", function() { 
        let valor = this.value.replace(/\D/g, ''); // Remove o que não é número.

        if (valor.length > 11) {
            valor = valor.slice(0, 11); // limita a 11 dígitos
        }

          // Formatação: (XX) X XXXX XXXX
        if (valor.length > 7) {
            this.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)} ${valor.slice(7)}`;
        } else if (valor.length > 3) {
            this.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3)}`;
        } else if (valor.length > 2) {
            this.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        } else {
            this.value = valor;
        }

    });

})

