function formatCPF(input) {
  const cpf_input = document.getElementById('cpf')

  var valor = input.value.replace(/\D/g, '');

  if (valor.length > 3) {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  }
  if (valor.length > 6) {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  }

  if (valor.length > 9) {
      valor = valor.replace(/(\d{3})(\d)/, '$1-$2');
  }

  if (validatorCPF(valor)){
      validation_true(cpf_input)
  }else{
      validation_false(cpf_input)
  }

  valor = valor.substring(0, 14);

  input.value = valor;
}

let br_num = '(11) 9 6262-7844'
// var valor = input.value.replace(/\D/g, '');
// valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
function formatPhone(input) {
  let value = input.value.replace(/\D/g, '')

  let regex = /(\d{2})(\d)/
  if(value.length > 2) {
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
  }

  input.value = value
}