
  const botaoCriar = document.querySelector('.btn.create');
  const modal = document.getElementById('modalCriarPedido');
  const fechar = document.getElementById('fecharModal');

  botaoCriar.addEventListener('click', () => {
    modal.classList.add('ativo');
  });

  fechar.addEventListener('click', () => {
    modal.classList.remove('ativo');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('ativo');
    }
  });

// Abertura dos modais
document.querySelector(".btn.remove").addEventListener("click", () => {
  document.getElementById("modalRemoverPedido").style.display = "block";
});
document.querySelector(".btn.edit").addEventListener("click", () => {
  document.getElementById("modalEditarPedido").style.display = "block";
});
document.querySelector(".btn.view").addEventListener("click", () => {
  document.getElementById("modalVerPedidos").style.display = "block";
});

// Função para fechar qualquer modal
function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}


// Abrir modal com dados ao clicar nos cards
document.querySelectorAll('.order-card').forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.querySelector('strong').textContent;
    const data = card.querySelectorAll('span')[1]?.textContent;
    
    // Aqui você pode adicionar uma descrição fictícia ou buscar dinamicamente
    const descricao = "Pedido de decoração e brinquedos para festa infantil.";

    // Preencher os dados no modal
    document.getElementById("nomeCliente").textContent = nome;
    document.getElementById("dataPedido").textContent = data;
    document.getElementById("descricaoPedido").textContent = descricao;

    // Mostrar o modal
    document.getElementById("modalInfoPedido").style.display = "block";
  });
});

// Função para fechar qualquer modal
function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}

// Exemplo de dados fictícios para simulação
const pedidos = [
  {
    cliente: "Nome cliente 1",
    data: "14-00-2000",
    descricao: "Festa de aniversário infantil com decoração temática.",
    itens: ["Piscina de bolinhas", "Pula-pula", "Algodão-doce"]
  },
  {
    cliente: "Nome cliente 2",
    data: "22-01-2021",
    descricao: "Evento empresarial com coffee break.",
    itens: ["Cadeiras", "Mesas", "Tenda"]
  },
  {
    cliente: "Nome cliente 3",
    data: "05-05-2023",
    descricao: "Casamento ao ar livre com estrutura completa.",
    itens: ["Palco", "Iluminação", "Som"]
  }
];

// Abre o modal com os dados do pedido
function abrirDetalhesPedido(index) {
  const pedido = pedidos[index];
  const conteudo = `
    <p><strong>Cliente:</strong> ${pedido.cliente}</p>
    <p><strong>Data:</strong> ${pedido.data}</p>
    <p><strong>Descrição:</strong> ${pedido.descricao}</p>
    <p><strong>Itens:</strong></p>
    <ul>${pedido.itens.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
  document.getElementById('detalhesPedidoContent').innerHTML = conteudo;
  document.getElementById('modalDetalhesPedido').style.display = 'block';
}

// Fecha o modal
function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Adiciona eventos aos cards
document.querySelectorAll('.order-card').forEach((card, index) => {
  card.addEventListener('click', () => abrirDetalhesPedido(index));
});

const botaoTema = document.querySelector(".theme-toggle");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");
});
