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

    fetch(`https://listen-api.listennotes.com/api/v2/search?q=${genero}s&sort_by_date=0&type=episode&offset=0&len_min=${}&len_max=${}`)
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