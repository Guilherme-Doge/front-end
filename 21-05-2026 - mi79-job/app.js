document.addEventListener("DOMContentLoaded", async () => {

    if (document.getElementById("page-detalhe")) {
        const urlParams = new URLSearchParams(window.location.search);
        
        const nome = urlParams.get("nome");
        const idade = urlParams.get("idade");
        const foto = urlParams.get("foto");
        const pais = urlParams.get("pais");
        const cidade = urlParams.get("cidade");
        const email = urlParams.get("email");
        const telefone = urlParams.get("telefone");

        if (!nome) return;

        const detailCard = document.getElementById("candidate-detail-card");

        detailCard.innerHTML = `
            <div class="detail-layout">
                <div>
                    <img src="${foto}" alt="Foto de ${nome}">
                    <a href="mailto:${email}" class="button-primary" style="margin-top: 24px; text-align: center; display: block;">HIRE CANDIDATE</a>
                </div>
                <div class="detail-info">
                    <h2 class="display-xxl" style="color: var(--ink); font-size: 40px;">${nome}</h2>
                    
                    <div class="info-row">
                        <span class="mono-eyebrow label">APPLICATION STATUS</span>
                        <span class="mono-eyebrow"><span class="badge-mint">UNDER REVIEW</span></span>
                    </div>
                    <div class="info-row">
                        <span class="mono-eyebrow label">AGE</span>
                        <span class="body-md">${idade} years old</span>
                    </div>
                    <div class="info-row">
                        <span class="mono-eyebrow label">EMAIL ADDRESS</span>
                        <span class="body-md">${email}</span>
                    </div>
                    <div class="info-row">
                        <span class="mono-eyebrow label">PHONE NUMBER</span>
                        <span class="body-md">${telefone}</span>
                    </div>
                    <div class="info-row">
                        <span class="mono-eyebrow label">LOCATION</span>
                        <span class="body-md">${cidade}, ${pais}</span>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    if (document.getElementById("page-lista")) {
        let candidatesList = [];
        
        const searchInput = document.getElementById("search-input");
        const sortSelect = document.getElementById("sort-select");
        const candidatesGrid = document.getElementById("candidates-grid");
        const loadingElement = document.getElementById("loading");

        searchInput.addEventListener("input", updateGrid);
        sortSelect.addEventListener("change", updateGrid);

        function updateGrid() {
            let processedList = [...candidatesList];
            const searchTerm = searchInput.value.toLowerCase().trim();

            if (searchTerm) {
                processedList = processedList.filter(candidate => {
                    const fullName = `${candidate.name.first} ${candidate.name.last}`.toLowerCase();
                    const country = candidate.location.country.toLowerCase();
                    return fullName.includes(searchTerm) || country.includes(searchTerm);
                });
            }

            const sortOrder = sortSelect.value;
            if (sortOrder === "asc") {
                processedList.sort((a, b) => a.dob.age - b.dob.age);
            } else if (sortOrder === "desc") {
                processedList.sort((a, b) => b.dob.age - a.dob.age);
            }

            renderCandidates(processedList);
        }

        function renderCandidates(list) {
            candidatesGrid.replaceChildren();

            if (list.length === 0) {
                candidatesGrid.insertAdjacentHTML('beforeend', `
                    <p style="grid-column: 1 / -1; text-align: center; opacity: 0.6;" class="mono-eyebrow">
                        Nenhum candidato corresponde à busca.
                    </p>
                `);
                return;
            }

            list.forEach(candidate => {
                const nomeCompleto = `${candidate.name.first} ${candidate.name.last}`;
                const idade = candidate.dob.age;
                const foto = candidate.picture.large;
                const pais = candidate.location.country;
                const cidade = candidate.location.city;
                const email = candidate.email;
                const telefone = candidate.phone;

                const queryParams = `nome=${encodeURIComponent(nomeCompleto)}&idade=${idade}&foto=${encodeURIComponent(foto)}&pais=${encodeURIComponent(pais)}&cidade=${encodeURIComponent(cidade)}&email=${encodeURIComponent(email)}&telefone=${encodeURIComponent(telefone)}`;

                candidatesGrid.insertAdjacentHTML('beforeend', `
                    <a href="candidato.html?${queryParams}" class="testimonial-card">
                        <div>
                            <div class="card-top">
                                <img src="${foto}" alt="Foto de ${nomeCompleto}">
                                <div>
                                    <h3 class="display-md">${nomeCompleto}</h3>
                                    <span class="mono-eyebrow">${pais}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-meta">
                            <span class="mono-eyebrow">AGE: ${idade} Y/O</span>
                            <span class="mono-eyebrow" style="color: var(--primary);">VIEW PROFILE →</span>
                        </div>
                    </a>
                `);
            });
        }

        try {
            const response = await fetch("https://randomuser.me/api/?results=50");
            const data = await response.json();
            candidatesList = data.results;
            updateGrid();
        } catch (error) {
            console.error("Erro crítico na requisição:", error);
            candidatesGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: red;" class="mono-eyebrow">FALHA AO CONECTAR COM O SERVIDOR.</p>`;
        } finally {
            loadingElement?.remove();
        }
    }
});