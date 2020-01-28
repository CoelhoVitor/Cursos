var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector('.info-peso');
  var tdAltura = paciente.querySelector('.info-altura');

  var tdImc = paciente.querySelector('.info-imc');

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log('Peso inválido!');
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaEhValida) {
    console.log('Altura inválida!');
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);

  return imc.toFixed(2);
}
