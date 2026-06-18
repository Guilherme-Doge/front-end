export default async function carregarNovosTalentos(filtro: string) {
    try {
      const urlParams = filtro ? `&${filtro}` : ``;
      const resposta = await fetch(`https://randomuser.me/api/?results=5${urlParams}`);
      
      const dados = await resposta.json();
      return dados.results;
      
    } catch (erro) {
      console.error("Erro ao buscar dados da API:", erro);
      alert("Falha ao buscar talentos.");
      return null;
    }
};