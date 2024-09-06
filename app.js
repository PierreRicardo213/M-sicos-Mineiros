// Função responsável por pesquisar dados e exibir os resultados na seção "resultados-pesquisa".
// Busca os dados no array 'dados' (não mostrado neste trecho) e cria elementos HTML para cada resultado.
// Cada resultado inclui: título, descrição, link para o Instagram e um iframe para o Spotify.
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão inseridos.
    let section = document.getElementById("resultados-pesquisa"); 
  
    // Inicializa uma string vazia para concatenar o HTML de cada resultado.
    let resultados = "";
  
    // Itera sobre cada objeto no array 'dados', construindo o HTML para cada resultado.
    for (let dado of dados) {
      // Cria um novo elemento HTML para cada resultado, formatando os dados do objeto.
      // As tags HTML `div`, `h3`, `p`, `a` e `iframe` são utilizadas para criar a estrutura visual.
      resultados += `<div class="item-resultado">
        <h3>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h3>
        <p class="descricao-meta">${dado.descricao}.</p>
        <a class="instagram" href="${dado.instagram}" target="_blank">Siga o artista no Instagram</a>
        <iframe class="spotify" style="border-radius:12px"
          src="${dado.spotify}" width="100%"
          height="142" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"   
  
          loading="lazy"></iframe>
      </div>`;
    }
  
    // Insere o HTML gerado na seção de resultados.
    section.innerHTML = resultados;
  }