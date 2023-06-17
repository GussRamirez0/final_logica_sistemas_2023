function validar() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);
  
    if (input1 < input3) {
      var resultado = input1 * input2 * input3;
      document.getElementById("resultado").innerHTML = "Multiplicación: " + input1 + " * " + input2 + " * " + input3 + " = " + resultado;
    } else if (input2 === 0) {
      var mayor = Math.max(input1, input3);
      var menor = Math.min(input1, input3);
      var resta = mayor - menor;
      document.getElementById("resultado").innerHTML = "Resta: " + mayor + " - " + menor + " = " + resta;
    } else {
      document.getElementById("resultado").innerHTML = "No se cumple ninguna condición.";
    }
  }
  
  function concatenar() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var input3 = parseInt(document.getElementById("input3").value);
    var resultado = "";
    
    for (var i = 0; i < ((input1 * input2) + input3); i++) {
      resultado += input1 + "" + input2 + "" + input3 + " ";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  