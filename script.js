let nome = window.document.querySelector('#nome');
let data_nascimento = window.document.querySelector('#dataNascimento');
let hora_nascimento = window.document.querySelector('#horaNascimento');
let segundos,dataInicial,dataAtual;

let criar1 = document.getElementById("criar1");
let criar2 = document.getElementById("criar2");
let criar3 = document.getElementById("criar3");
let criar4 = document.getElementById("criar4");
let criar5 = document.getElementById("criar5");
let criar6 = document.getElementById("criar6");
function conversaoSegundos(){
  if (nome.value == "" || data_nascimento.value == "" || hora_nascimento.value == "") {
    window.alert("Preencha todos os campos!");
  } else {
  dataInicial = new Date(data_nascimento.value + ' ' + hora_nascimento.value);
  dataAtual = new Date();

  let diferencaEmMilissegundos = dataAtual - dataInicial;

  segundos = Math.floor(diferencaEmMilissegundos / 1000);
  }
}

function calcAno() {
  conversaoSegundos();
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  let meses = 0;
  while (dataInicial < dataAtual) {
    dataInicial.setMonth(dataInicial.getMonth() + 1);
    meses++;
  }
  meses--;/*nessa parte,diminui um mês,verificar qual a lógica */


  let ultimoDiaMesAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();/*qual o ultimo dia do mês atual, voltar aqui, CÓDIGO NÃO UTILIZADO */
  let ultimoDiaMesInicial = new Date(dataInicial.getFullYear(), dataInicial.getMonth(), 0).getDate();/*qual o dia do seu aniversário no mês atual */

  if (dataInicial.getDate() > dataAtual.getDate()) {/*condição para verificar se a data do aniversário é maior do que o dia de hoje*/
    meses--;/*se o dia do aniversário for maior que a data atual, diminui um mês, pois o mês atual so é contabilizado quando passa o dia do aniversário*/
    dias = ultimoDiaMesInicial - dataInicial.getDate() + dataAtual.getDate();/**cálculo para identificar a quantidade de dias entre a data no aniversário do mês passado(24/10/2023) até o dia atual(04/11/2023),o resultado da quantidade de dias será 11.*/
  } else {
    dias = dataAtual.getDate() - dataInicial.getDate();/**se a data de aniversário for menor que data atual, é calculado a quantidade de dias que há entre a data de aniversário(24/11/2023) e a data atual(29/11/2023),o resultado da quantidade de dias será 5.*/
  }

  let anos = Math.floor(meses / 12);/**cálculo para dividir os meses e conseguir a quantidade de anos*/
  meses = meses % 12;/** aqui é pego o resto da divisão e atribui a variável meses.*/

  criar1 = document.getElementById("criar1");
  criar1.style.display = "block";
 
  setInterval(calcAno, 1000);

  criar1.innerHTML = 'Passaram-se ' + anos + ' anos, ' + meses + ' meses, ' + dias + ' dias, ' + horas % 24 + ' horas, ' + minutos % 60 + ' minutos e ' + segundos % 60 + ' segundos desde a data inicial.';
}

function calcMes() {
  conversaoSegundos();
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  let meses = 0;
  while (dataInicial < dataAtual) {
    dataInicial.setMonth(dataInicial.getMonth() + 1);
    meses++;
  }
  meses--;/*nessa parte,diminui um mês,verificar qual a lógica */


  let ultimoDiaMesAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();/*qual o ultimo dia do mês atual, voltar aqui, CÓDIGO NÃO UTILIZADO */
  let ultimoDiaMesInicial = new Date(dataInicial.getFullYear(), dataInicial.getMonth(), 0).getDate();/*qual o dia do seu aniversário no mês atual */

  if (dataInicial.getDate() > dataAtual.getDate()) {/*condição para verificar se a data do aniversário é maior do que o dia de hoje*/
    meses--;/*se o dia do aniversário for maior que a data atual, diminui um mês, pois o mês atual so é contabilizado quando passa o dia do aniversário*/
    dias = ultimoDiaMesInicial - dataInicial.getDate() + dataAtual.getDate();/**cálculo para identificar a quantidade de dias entre a data no aniversário do mês passado(24/10/2023) até o dia atual(04/11/2023),o resultado da quantidade de dias será 11.*/
  } else {
    dias = dataAtual.getDate() - dataInicial.getDate();/**se a data de aniversário for menor que data atual, é calculado a quantidade de dias que há entre a data de aniversário(24/11/2023) e a data atual(29/11/2023),o resultado da quantidade de dias será 5.*/
  }


  var criar2 = document.getElementById("criar2");
  criar2.style.display = "block";

  setInterval(calcMes, 1000);

  criar2.innerHTML = 'Passaram-se ' + meses + ' meses, ' + dias + ' dias, ' + horas % 24 + ' horas, ' + minutos % 60 + ' minutos e ' + segundos % 60 + ' segundos desde a data inicial.';
}

function calcDias() {
  conversaoSegundos();
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  dias = dias.toLocaleString();

  var criar3 = document.getElementById("criar3");
  criar3.style.display = "block";

  setInterval(calcDias, 1000);

  criar3.innerHTML = 'Passaram-se ' + dias + ' dias, ' + horas % 24 + ' horas, ' + minutos % 60 + ' minutos e ' + segundos % 60 + ' segundos desde a data inicial.';
}

function calcHr() {
  conversaoSegundos();
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  horas = horas.toLocaleString();

  var criar4 = document.getElementById("criar4");
  criar4.style.display = "block";

  setInterval(calcHr, 1000);

  criar4.innerHTML = 'Passaram-se ' + horas  + ' horas, ' + minutos % 60 + ' minutos e ' + segundos % 60 + ' segundos desde a data inicial.';
}

function calcMin() {
  conversaoSegundos();
  let minutos = Math.floor(segundos / 60);
  minutos = minutos.toLocaleString();

  var criar5 = document.getElementById("criar5");
  criar5.style.display = "block";

  setInterval(calcMin, 1000);

  criar5.innerHTML = 'Passaram-se ' + minutos + ' minutos e ' + segundos % 60 + ' segundos desde a data inicial.';
}

function calcSeg() {
  conversaoSegundos();
  segundos = segundos.toLocaleString();

  var criar6 = document.getElementById("criar6");
  criar6.style.display = "block";

  criar6.innerHTML = 'Passaram-se ' + segundos  + ' segundos desde a data inicial.';
}

setInterval(calcSeg, 1000);