  const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
  }
 
  const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
      const pos1 = Math.floor(Math.random() * vetor.length);
      const pos2 = Math.floor(Math.random() * vetor.length);
      swap(vetor, pos1, pos2);
    }
  }
  
   
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
  
  
   const quick_sort = (arr, start, end) => {
    if (start < end) {
      let pivo = partition(arr, start, end);
      quick_sort(arr, start, pivo);
      quick_sort(arr, pivo + 1, end);
    }
  };
  
  const particionamento = (arr, start, end) => {
    let pivo = arr[end];
    let i = start - 1;
  
    for (let j = start; j < end; j++) {
      if (arr[j] <= pivo) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
  };
  
  
  let valores = [];
          function add() {
              let valor = document.getElementById("valor").value;
              let lista = document.getElementById("valores");
              let node = document.createElement("li");
              let textoNode = document.createTextNode(valor);
              node.appendChild(textoNode);
              lista.appendChild(node);
              valores.push(parseInt(valor));
          }
  
          function ordenar() {
              let ordenacao = document.getElementById("ordenacao").value;
              if (ordenacao === "bubble_sort") {
                  bubble_sort(valores);
              } else if (ordenacao === "selection_sort") {
                  selection_sort(valores);
              } else if (ordenacao === "quick_sort") {
                  let pivot = valores[valores.length - 1];
                  quick_sort(valores, 0, valores.length - 1, pivot);
              }
  
              let lista = document.getElementById("valores");
              lista.innerHTML = "";
              for (let i = 0; i < valores.length; i++) {
                  let node = document.createElement("li");
                  let textoNode = document.createTextNode(valores[i]);
                  node.appendChild(textoNode);
                  lista.appendChild(node);
                  console.log(valores)
              }
          }
  
          function misturar() {
              shuffle(valores, valores.length);
              let lista = document.getElementById("valores");
              lista.innerHTML = "";
              for (let i = 0; i < valores.length; i++) {
                  let node = document.createElement("li");
                  let textoNode = document.createTextNode(valores[i]);
                  node.appendChild(textoNode);
                  lista.appendChild(node);
                  console.log(valores)
              }
          
          }

          
          