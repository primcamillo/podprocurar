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
document.querySelector("#btn-").addEventListener("click", () => {
  
});