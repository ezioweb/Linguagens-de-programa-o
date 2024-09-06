function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
  //  console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value
  // console.log(campoPesquisa)

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Digite o que quer pesquisar no campo acima</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";


for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p>${dado.descricao}</p>
                    <h3>Paradigmas de programação</h3>
                    <p>${dado.paradigmasDeProgramacao}</p>
                    <h3>Plataformas</h3>
                    <p>${dado.plataformas}</p>
                    <a href=${dado.link} target="_blank">Link para a documentação</a>
                </div>
    `
    }
};

if (!resultados) {
    resultados = "<p>Nada foi encontrado </p>"
}
section.innerHTML = resultados
};
// console.log(dados);

