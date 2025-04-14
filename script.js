function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const regexTelefone = /^\d{10,11}$/;

    if (!nome || !regexTelefone.test(telefone) || !email || !assunto || !mensagem) {
      alert("Por favor, preencha todos os campos corretamente.");
      return false;
    }

    document.getElementById("mensagem-sucesso").style.display = "block";
    return false; // Impede envio real, só mostra sucesso
  }
