const links = document.querySelectorAll(".link-card");

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Clicou em:", link.textContent.trim());
  });
});

console.log("Cartão digital pronto!");