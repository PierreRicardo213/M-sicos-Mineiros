// Função responsável por pesquisar dados e exibir os resultados na seção "resultados-pesquisa".
// Busca os dados no array 'dados' (não mostrado neste trecho) e cria elementos HTML para cada resultado.
// Cada resultado inclui: título, descrição, link para o Instagram e um iframe para o Spotify.

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão inseridos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Não encontrado. Digite uma palavra!</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para concatenar o HTML de cada resultado.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada objeto no array 'dados', construindo o HTML para cada resultado.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      // cria um novo elemento
      resultados += `<div class="item-resultado">
      <h3>
        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
      </h3>
      <p class="descricao-meta">${dado.descricao}.</p>
      <a class="instagram" href="${dado.instagram}" target="_blank">Siga o artista no Instagram</a>
      <iframe class="spotify" style="border-radius:12px"
        src="${dado.spotify}" width="100%"
        height="152" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

        loading="lazy"></iframe>
    </div>`;
    }
  }
  
  if (!resultados) {
    resultados = "<p> Ele é 'fí di' quem? Não encontrado."
  }

  // Insere o HTML gerado na seção de resultados.
  section.innerHTML = resultados;
}
