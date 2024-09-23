(() => {
  const run = () => {
    const footer = document.getElementById("footer");
    footer.innerHTML = `
      <div class="container container-rodape">
        <img
          src="./imagens/Brand-CodeScript-Gradient-Color-Blue-Font-White-2.svg"
          alt="icone hashtag"
          class="logo-footer"
        />
  
        <div class="rodape-coluna rodape-coluna-info">
          <div class="subsecao-rodape">
            <img
              src="./imagens/Brand-CodeScript-Gradient-Color-Blue-Font-White-2.svg"
              alt="icone hashtag"
              class="logo-footer-media"
            />
            <img
              class="grupo-rodape-media"
              src="https://codescript.com.br/static/media/conversation_tche.720a4d0a.svg"
              alt=""
            />
            <p class="rodape-titulo">Fale Conosco</p>
  
            <div class="subsecao-assistente">
              <p class="teste">José | Assistente de Suporte</p>
  
              <div class="rodape-div-iconelink">
                <div class="rodape-iconelink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="50px"
                  >
                    <rect
                      x="48"
                      y="96"
                      width="416"
                      height="320"
                      rx="40"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></rect>
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M112 160l144 112 144-112"
                    ></path>
                  </svg>
                  <a class="rodape-link" href="mailto:atendimento@codescript.com" target="_blank"
                    >atendimento@codescript.com</a
                  >
                </div>
                <div class="rodape-iconelink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="50px"
                  >
                    <path
                      d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    ></path>
                  </svg>
                  <a
                    class="rodape-link"
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    >(54) 99966-0470 (WhatsApp)</a
                  >
                </div>
              </div>
            </div>
          </div>
  
          <div class="subsecao-rodape">
            <p class="rodape-titulo">Endereço</p>
            <h4>Edifício Privilegium</h4>
            <p class="teste">
              R. Quinze de Novembro, 918, Centro, sala 1102, Passo Fundo - RS
            </p>
          </div>
  
          <div class="subsecao-rodape">
            <p class="rodape-titulo">Redes Sociais</p>
            <div class="rodape-redessociais">
              <a
                class="link-redessociais"
                href="https://www.instagram.com/codescript.tech/"
                target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50px"
                >
                  <path
                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                  ></path>
                  <path
                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                  ></path>
                </svg>
              </a>
  
              <a
                class="link-redessociais"
                href="https://www.linkedin.com/company/codescript-tech/"
                target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50px"
                >
                  <path
                    d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
  
          <div class="subsecao-rodape">
            <p class="rodape-titulo">Proteção de Dados</p>
  
            <div class="rodape-div-iconelinkProtecao">
              <div class="rodape-iconelink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50px"
                >
                  <path
                    d="M336 208v-95a80 80 0 00-160 0v95"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  ></path>
                  <rect
                    x="96"
                    y="208"
                    width="320"
                    height="272"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  ></rect>
                </svg>
                <a class="rodape-link" href="politica.html">Política de Privacidade</a>
              </div>
            </div>
          </div>
  
          <hr />
          <p class="rodape-copyright">
            © 2024 Hashtag Treinamentos. Todos os Direitos Reservados
          </p>
        </div>
  
        <img
          class="grupo-rodape"
          src="https://codescript.com.br/static/media/conversation_tche.720a4d0a.svg"
          alt=""
        />
      </div>
    `;
  };

  window.addEventListener("load", run);
})();
