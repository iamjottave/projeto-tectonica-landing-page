const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

/* quando clicar pra avançar temos que
esconder todas as imagems e mostrar a proxima imagem
*/
setaAvancar.addEventListener("click", function () {
    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens) {
        return;

    }

  /*
        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 no contador de imagens
        pra saber que agora vou mostrar a segunda ima
    */
  imagemAtual++;
  /*
            esconder todas as imagem
                pegar todas as imagens usando DOM e remover a classe mostrar

    */
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });

  /*
            MOSTRAR a proxima imagem
             pegar todas as imagem, descobrir qual é a proxima, e colocar a classe 
             mostrar nela 

*/
    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function () {

    if(imagemAtual === 0) {
        return;
}
    
    imagemAtual--;

    imagensPainel.forEach((imagem) => {
        imagem.classList.remove("mostrar");
      });
    
      imagensPainel[imagemAtual].classList.add('mostrar');

})
