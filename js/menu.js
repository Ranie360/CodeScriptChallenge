(() => {
  const MENUS = [
    {
      href: "index.html",
      label: "Início",
    },
    {
      href: "sobre.html",
      label: "Sobre",
    },
    {
      href: "servicos.html",
      label: "Serviços",
    },
    {
      href: "produtos.html",
      label: "Produtos",
    },
    {
      href: "contato.html",
      label: "Contato",
    },
  ];

  const run = () => {
    const header = document.getElementById("cabecalho");
    const headerFragment = document.createDocumentFragment();

    const homeAnchor = document.createElement("a");
    homeAnchor.href = "index.html";
    headerFragment.appendChild(homeAnchor);

    const homeImage = document.createElement("img");
    homeImage.src =
      "/imagens/Brand-CodeScript-Gradient-Color-Blue-Font-White-2.svg";
    homeImage.classList.add("logo");
    homeImage.alt = "Logo";
    homeAnchor.appendChild(homeImage);

    const nav = document.createElement("nav");
    headerFragment.appendChild(nav);

    const navUl = document.createElement("ul");
    nav.appendChild(navUl);

    // Desktop menus
    for (const menu of MENUS) {
      const li = document.createElement("li");
      li.classList.add("item-lista");
      navUl.appendChild(li);

      const anchor = document.createElement("a");
      anchor.href = menu.href;
      anchor.textContent = menu.label;
      li.appendChild(anchor);
    }

    // Mobile menus
    const mobileLi = document.createElement("li");
    mobileLi.classList.add("item-lista2", "contem-filhos");
    navUl.appendChild(mobileLi);

    const mobileAnchor = document.createElement("a");
    mobileAnchor.classList.add("indice");
    mobileAnchor.href = "#";
    mobileAnchor.innerHTML = "MENU &#9660;";
    mobileLi.appendChild(mobileAnchor);

    const mobileUl = document.createElement("ul");
    mobileLi.appendChild(mobileUl);

    for (const menu of MENUS) {
      const li = document.createElement("li");
      li.classList.add("item-lista2");

      const anchor = document.createElement("a");
      anchor.href = menu.href;
      anchor.textContent = menu.label;
      li.appendChild(anchor);
      mobileUl.appendChild(li);
    }

    header.appendChild(headerFragment);
  };

  window.addEventListener("load", run);
})();
