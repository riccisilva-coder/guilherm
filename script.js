const botoes = document.querySelectorAll(button);

botoes.forEach(function (botao) {
  let curtiu = false;
  botao.addEventListener("click", botaoClicado);
  function botaoClicado() {
    console.log("fui clicado");
    let txto = botao.querySelector("span");
    if (curtiu == false) {
      texto.textContent++;
      curtiu = true;
    } else{
      text.textContent --;
      curtiu = false;
    }
  }
}
