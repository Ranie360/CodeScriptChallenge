document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Limpa mensagens de erro anteriores
    clearErrorMessages();

    // Valida os campos obrigatórios
    const isValid = validateForm();

    // Verifica se o reCAPTCHA foi resolvido
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      const recaptchaError = document.getElementById("recaptcha-error");
      if (recaptchaError) {
        recaptchaError.textContent = "Por favor, complete o reCAPTCHA.";
      }
      return;
    }

    // Adiciona a resposta do reCAPTCHA aos dados do formulário
    const formData = new FormData(this);
    formData.append("recaptcha", recaptchaResponse);

    // Envia os dados usando fetch
    fetch("https://eowyo4jx92dxhja.m.pipedream.net", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso:", data);
        alert("Mensagem enviada com sucesso!");

        // Limpa os campos do formulário
        form.reset();

        // Limpa a resposta do reCAPTCHA
        grecaptcha.reset();
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar a mensagem.");
      });
  });

  function validateForm() {
    let isValid = true;

    // Obtém todos os campos obrigatórios
    const requiredFields = form.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
      const errorSpan = field.nextElementSibling;

      if (!field.value.trim()) {
        isValid = false;
        if (errorSpan && errorSpan.classList.contains("error-message")) {
          errorSpan.textContent = "Campo obrigatório";
        }
      } else {
        if (errorSpan && errorSpan.classList.contains("error-message")) {
          errorSpan.textContent = "";
        }
      }
    });

    return isValid;
  }

  function clearErrorMessages() {
    // Limpa todas as mensagens de erro
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((span) => {
      span.textContent = "";
    });
  }
});
