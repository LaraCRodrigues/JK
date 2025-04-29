// Inicializa com sua Public Key
emailjs.init("Gb-xRerrtvDTdQ24I");

const btn = document.getElementById("button");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "service_jkformulario";
  const templateID = "template_9prqea1";

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = "Enviar";
      alert("Mensagem enviada com sucesso! 🚀");
      form.reset(); // limpa os campos
    }, (err) => {
      btn.value = "Enviar";
      alert("Erro ao enviar 😢 " + JSON.stringify(err));
    });
});
