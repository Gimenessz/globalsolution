// Alternar entre as seções com cliques no menu
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Ativar a seção correspondente
        const sectionToShow = event.target.getAttribute("data-section");

        sections.forEach(section => {
            if (section.id === sectionToShow) {
                section.classList.add("section-active");
                section.classList.remove("section-hidden");
            } else {
                section.classList.add("section-hidden");
                section.classList.remove("section-active");
            }
        });

        // Marcar o link como ativo
        links.forEach(link => link.classList.remove("active"));
        event.target.classList.add("active");
    });
});

// Validação do formulário
document.querySelector("#form-contato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor, insira um email válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    document.querySelector("#form-contato").reset();
});
