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

  // Função para alternar entre temas claro e escuro e adicionar alertas
  const form = document.getElementById('form-alerta');
  const lista = document.getElementById('lista-alertas');
  const botaoTema = document.getElementById('alternar-tema');
  const body = document.body;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    const novoAlerta = document.createElement('div');
    novoAlerta.classList.add('alerta');
    novoAlerta.innerHTML = `
      <strong>${titulo}</strong><br>
      ${descricao}<br>
      📅 ${data} ⏰ ${hora}
    `;

    lista.appendChild(novoAlerta);
    form.reset();
  });

  botaoTema.addEventListener('click', () => {
    body.classList.toggle('escuro');
    body.classList.toggle('claro');
  });