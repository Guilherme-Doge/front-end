const destaques_showcase = document.getElementById("destaques-showcase");
const catalogo_wrapper = document.getElementById("catalogo-wrapper");

async function loadFeaturedProducts() {
    try {
        const response = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos');

        if (!response.ok) throw new Error("");

        const produtos = await response.json();
        destaques_showcase.replaceChildren();

        const destaques = produtos.slice(0, 6);

        destaques.array.forEach(item => {
            const card = document.createElemente("div");
            card.className = "card";
            card.style.cursor = ("pointer");
            card.onclick = () => window.location.href = `detail.html?id=${item.id}`

            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                <div class="card-body">
                    <span class="card-category text-muted">${item.categoria || 'Geral'}</span>
                    <h3 class="card-title">${item.nome}</h3>
                    <p class="card-desc">${item.descricao}</p>
                    <div class="card-footer">
                        <span class="price">R$ ${item.preco.toFixed(2)}</span>
                        <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${item.id}'">
                            Ver Mais
                        </button>
                    </div>
                </div>
                `;

                destaques_showcase.appendChild(card)
        });

    } catch (error) {
    }
}

async function loadMenu() {
    try {
        const response = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos');
        if (!response.ok) throw new Error("Erro na requisição");

        const produtos = await response.json();
        
        catalogo_wrapper.replaceChildren();

        const categorias = produtos.reduce((acc, produto) => {
            const cat = produto.categoria || "Outros";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(produto);
            return acc;
        }, {});

        for (const nomeCategoria in categorias) {
            const itens = categorias[nomeCategoria];

            const secao = document.createElement("div");
            secao.classList.add("bloco-grupo-pratos");
            secao.style.marginBottom = "3rem";

            secao.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                    <h2>${nomeCategoria} <span style="font-size: 1rem; color: #888; font-weight: normal;"> - ${itens.length} itens</span></h2>
                    <select class="seletor-ordem" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #444; background-color: #222; color: #fff;">
                        <option value="asc">Menor Preço</option>
                        <option value="desc">Maior Preço</option>
                    </select>
                </div>
            `;

            const grid = document.createElement("div");
            grid.classList.add("grid");

            itens.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.cursor = "pointer";
                card.onclick = () => window.location.href = `detail.html?id=${item.id}`;

                card.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${nomeCategoria}</span>
                        <h3 class="card-title">${item.nome}</h3>
                        <p class="card-desc">${item.descricao}</p>
                        <div class="card-footer">
                            <span class="price">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${item.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            secao.appendChild(grid);
            catalogo_wrapper.appendChild(secao);
        }

    } catch (error) {
        console.error("Erro ao carregar o cardápio:", error);
        catalogo_wrapper.innerHTML = `<p style="text-align:center">Ops! Não conseguimos carregar o cardápio no momento.</p>`;
    }
}

async function loadProductDetail() {
    const infoPratoView = document.getElementById("info-prato-view");
    const sugestoesGrid = document.getElementById("sugestoes-grid");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        infoPratoView.innerHTML = "<h2>Produto não encontrado.</h2>";
        return;
    }

    try {
        const response = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos');
        if (!response.ok) throw new Error("Erro ao carregar dados");

        const produtos = await response.json();

        const produto = produtos.find(p => p.id == productId);

        if (!produto) {
            infoPratoView.innerHTML = "<h2>Produto inexistente em nosso cardápio.</h2>";
            return;
        }
        infoPratoView.innerHTML = `
            <div class="detail-container">
                <img src="${produto.imagem}" alt="${produto.nome}" class="detail-image" onerror="this.src='https://placehold.co/600x400?text=Sem+Imagem'">
                <div class="detail-info">
                    <span class="badge">${produto.categoria}</span>
                    <h1 style="margin-top: 1rem; font-size: 2.5rem;">${produto.nome}</h1>
                    <p class="detail-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                    <p style="font-size: 1.1rem; color: #888; margin-bottom: 2rem;">
                        ${produto.descricao}
                    </p>
                    <p style="color: #888; font-size: 0.9rem">ID: ${produto.id}</p>
                    ${produto.destaque ? '<p style="color: var(--primary-color); margin-top: 10px"><i class="fas fa-star"></i> Item em Destaque</p>' : ''}
                </div>
            </div>
        `;

        const sugestoes = produtos
            .filter(p => p.categoria === produto.categoria && p.id != produto.id)
            .slice(0, 3);

        sugestoesGrid.replaceChildren();

        if (sugestoes.length === 0) {
            document.getElementById("sugestoes-sec").style.display = "none";
        } else {
            sugestoes.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.cursor = "pointer";
                card.onclick = () => window.location.href = `detail.html?id=${item.id}`;

                card.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${item.categoria}</span>
                        <h3 class="card-title">${item.nome}</h3>
                        <p class="card-desc">${item.descricao.substring(0, 80)}...</p>
                        <div class="card-footer">
                            <span class="price">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${item.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                `;
                sugestoesGrid.appendChild(card);
            });
        }

    } catch (error) {
        console.error("Erro:", error);
        infoPratoView.innerHTML = "<p>Ocorreu um erro ao carregar os detalhes.</p>";
    }
}