// ===========================
// DADOS DINÂMICOS
// ===========================
const impactos = [
  {
    titulo: "Desmatamento",
    descricao: "Perda de florestas nativas que afeta a biodiversidade e o clima."
  },
  {
    titulo: "Poluição",
    descricao: "Contaminação de rios, solos e ar por resíduos e produtos químicos."
  },
  {
    titulo: "Aquecimento Global",
    descricao: "Elevação da temperatura média da Terra devido ao efeito estufa."
  }
];

const acoes = [
  {
    titulo: "Reduzir, Reutilizar e Reciclar",
    descricao: "Diminuir o consumo, reutilizar materiais e separar corretamente o lixo."
  },
  {
    titulo: "Economizar Água",
    descricao: "Evitar desperdício, consertar vazamentos e reutilizar água quando possível."
  },
  {
    titulo: "Plantar Árvores",
    descricao: "Contribuir para reflorestamento e manutenção de áreas verdes."
  }
];

const galeria = [
  { src: "https://via.placeholder.com/600x400?text=Floresta", alt: "Floresta" },
  { src: "https://via.placeholder.com/600x400?text=Oceano", alt: "Oceano" },
  { src: "https://via.placeholder.com/600x400?text=Cidade", alt: "Cidade" }
];

// ===========================
// RENDER CARDS (Impactos)
// ===========================
const cardsContainer = document.getElementById("cards-container");

impactos.forEach(impacto => {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "listitem");

  card.innerHTML = `
    <h3>${impacto.titulo}</h3>
    <p>${impacto.descricao}</p>
  `;
  cardsContainer.appendChild(card);
});

// ===========================
// RENDER ACORDEÃO (Ações)
// ===========================
const accordionContainer = document.getElementById("accordion");

acoes.forEach((acao, index) => {
  const item = document.createElement("div");
  item.className = "accordion-item";

  const header = document.createElement("button");
  header.className = "accordion-header";
  header.setAttribute("aria-expanded", "false");
  header.textContent = acao.titulo;

  const content = document.createElement("div");
  content.className = "accordion-content";
  content.innerHTML = `<p>${acao.descricao}</p>`;

  header.addEventListener("click", () => {
    const expanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", String(!expanded));
    content.style.display = expanded ? "none" : "block";
  });

  item.appendChild(header);
  item.appendChild(content);
  accordionContainer.appendChild(item);
});

// ===========================
// CARROSSEL
// ===========================
const track = document.getElementById("carousel-track");
let currentIndex = 0;

// Render slides
galeria.forEach(item => {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;
  track.appendChild(img);
});

const prevBtn = document.querySelector(".carousel .prev");
const nextBtn = document.querySelector(".carousel .next");

function updateCarousel() {
  const width = track.children[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galeria.length) % galeria.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galeria.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

// ===========================
// CONTROLE DE CONTRASTE
// ===========================
const toggleContrast = document.getElementById("toggle-contrast");
toggleContrast.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
  const pressed = toggleContrast.getAttribute("aria-pressed") === "true";
  toggleContrast.setAttribute("aria-pressed", String(!pressed));
});

// ===========================
// CONTROLE DE FONTE
// ===========================
const fontIncrease = document.getElementById("font-increase");
const fontDecrease = document.getElementById("font-decrease");

fontIncrease.addEventListener("click", () => {
  changeFontSize(1.1);
});

fontDecrease.addEventListener("click", () => {
  changeFontSize(0.9);
});

function changeFontSize(factor) {
  const body = document.body;
  const style = window.getComputedStyle(body);
  const currentSize = parseFloat(style.fontSize);
  body.style.fontSize = `${currentSize * factor}px`;
}

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll(".scroll-reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
