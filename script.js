document.querySelector("#btn-start").addEventListener("click", () => {
  document.querySelector(".base-genrer").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#btn-next").addEventListener("click", () => {
  document.querySelector(".base-time").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#btn-next_result_podcasts").addEventListener("click", () => {
  document.querySelector(".base-result_podcasts").scrollIntoView({ behavior: "smooth" });

  //TODO: usar query selector para buscar os generos selecionados e o tempo
  /*
    let generos = queryselector()
    let tempo = queryselector()
  */
});
//esta botao ira receber a API do genero que usuario escolher - tera um funcao
//document.querySelector("#btn-").addEventListener("click", () => {});

//.................exemplo de um exercicio
//const stickers = document.querySelector('.stickers');
const button = document.querySelector('.btnGen1');

button.addEventListener('click',(evento) =>{
    evento.preventDefault();
   // stickers.innerHTML = " "

    fetch(`https://www.listennotes.com/pt/api/docs/#get-api-v2-genres`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        data.data.forEach(gif =>{
            const div = document.createElement ('div')
            div.setAttribute('class', 'card');
            div.setAttribute('data-id', gif.id);
            stickers.appendChild(div);
        
        let image = document.createElement('img');
        image.setAttribute('src', gif.images.original.url);
        div.appendChild(image);
        console.log(data);
    })
    
})
    .catch((erro) => {
        console.log(erro);
    })
} )



//---EXEMPLO DE EXERCICIO COM API FEITO EM AULA---//

//pegar um valor do meu imput e dar um console 
//diparar um evento para q pegue o valor do imput, estimular o cod chamar o api, 


/* const cep = document.getElementById("cep"); //pegando o elemento cep HTML
console.log(cep.value)//escrevendo no consoole valor do cep
cep.addEventListener("focusout", () => {
  console.log("FOCUS OUT")
  console.log('https://viacep.com.br/ws/' + cep.value + '/json') //console.log(`https://viacep.com.br/ws/ ${cep.value} /json`)

  fetch('https://viacep.com.br/ws/' + cep.value + '/json')//espera a url parametro obrigatorio
    .then(function (response) {//outra forma de fazer .then((response)=>{codigo aqui}
      return response.json();// 1o then nos tras uma resposta
    })
    .then(function (data) {//outra forma de fazer .then((data)=>{codigo aqui}

      //      pode usar os dados do API
      //     //console.log("SUCESSO!!")
      //     console.log(data) //para acessar o obj data.localizacao

      let estado = document.getElementById('estado');
      estado.value = data.uf;

      let cidade = document.getElementById('cidade');
      cidade.value = data.localidade;

      let bairro = document.getElementById('bairro');
      bairro.value = data.bairro;

      let endereco = document.getElementById('endereco');
      endereco.value = data.logradouro;


    })
    .catch(function (erro) {
      console.log(erro)
    })
})
*/