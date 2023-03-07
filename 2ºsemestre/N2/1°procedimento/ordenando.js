/** Tenta converter o valor para inteiro. Se der problema, devolve zero */
function TryParseInt(str) {
    var retValue = 0;
    if(str !== null && str != undefined) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
  }
  
  // a) Função swap, com o objetivo de trocar os valores de duas posições de um vetor
  const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
  }
  
  // b) Função shuffle, com o objetivo de embaralhar os elementos de um vetor
  const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
      const pos1 = Math.floor(Math.random() * vetor.length);
      const pos2 = Math.floor(Math.random() * vetor.length);
      swap(vetor, pos1, pos2);
    }
  }
  
    // c) Função bubble_sort, para ordenar um vetor de inteiros 
    const bubble_sort = vetor => {
      let trocou = true;
      while (trocou) {
        trocou = false;
        for (let i = 0; i < vetor.length - 1; i++) {
          if (vetor[i] > vetor[i + 1]) {
            swap(vetor, i, i + 1);
            trocou = true;
          }
        }
      }
    }
  
   // d) Função selection_sort, para ordenar um vetor de inteiros 
   const selection_sort = vetor => {
    for (let i = 0; i < vetor.length; i++) {
      let min = i;
      for (let j = i + 1; j < vetor.length; j++) {
        if (vetor[j] < vetor[min]) {
          min = j;
        }
      }
      if (i !== min) {
        swap(vetor, i, min);
      }
    }
  }
  
   // e) Função quick_sort, para ordenar um vetor de inteiros 
  quick_sort = (vetor, posicaoInicial, posicaoFinal) => {
    if (posicaoInicial == undefined) {
        posicaoInicial = 0;
    }
    if (posicaoFinal == undefined) {
        posicaoFinal = vetor.length - 1;
    }
    if (posicaoInicial >= posicaoFinal) {
        return;
    }
    
    // retorna o índice do pivot
    let index = particionamento(vetor, posicaoInicial, posicaoFinal);
    
    // Chamada recursiva, aplicando a mesma lógica para a esquerda e direita
    quick_sort(vetor, posicaoInicial, index - 1);
    quick_sort(vetor, index + 1, posicaoFinal);
}

particionamento = (vetor, posicaoInicial, posicaoFinal) => {
    // Pega o último elemento como o pivot
    const pivotValue = vetor[posicaoFinal];
    let pivotIndex = posicaoInicial; 
    for (let i = posicaoInicial; i < posicaoFinal; i++) {
        if (vetor[i] < pivotValue) {
            // Troca elementos
            swap(vetor, i, pivotIndex);
            pivotIndex++;
        }
    }
    // Coloca o valor do pivot no centro
    swap(vetor, pivotIndex, posicaoFinal);
    return pivotIndex;
}
  
  
  var valores = [];
          function add() {
              var valor = document.getElementById("valor").value;
              var lista = document.getElementById("valores");
              var node = document.createElement("li");
              var textNode = document.createTextNode(valor);
              node.appendChild(textNode);
              lista.appendChild(node);
              valores.push(parseInt(valor));
          }
  
          function ordenar() {
              var ordenacao = document.getElementById("ordenacao").value;
              if (ordenacao === "bubble_sort") {
                  bubble_sort(valores);
              } else if (ordenacao === "selection_sort") {
                  selection_sort(valores);
              } else if (ordenacao === "quick_sort") {
                  var pivot = valores[valores.length - 1];
                  quick_sort(valores, 0, valores.length - 1, pivot);
              }
  
              var lista = document.getElementById("valores");
              lista.innerHTML = "";
              for (var i = 0; i < valores.length; i++) {
                  var node = document.createElement("li");
                  var textNode = document.createTextNode(valores[i]);
                  node.appendChild(textNode);
                  lista.appendChild(node);
                  console.log(valores)
              }
          }
  
          function misturar() {
              shuffle(valores, valores.length);
              var lista = document.getElementById("valores");
              lista.innerHTML = "";
              for (var i = 0; i < valores.length; i++) {
                  var node = document.createElement("li");
                  var textNode = document.createTextNode(valores[i]);
                  node.appendChild(textNode);
                  lista.appendChild(node);
                  console.log(valores)
              }
          
          }

          
          