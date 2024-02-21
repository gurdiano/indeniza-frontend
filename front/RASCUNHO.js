let value = "763.947.370-54";

console.log(validatorCPF(value));

function validatorCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '')
  
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false

  let sum = 0;
  for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let result = 11 - (sum % 11);
  let dv1 = result >= 10 ? 0 : result;

  if (parseInt(cpf.charAt(9)) !== dv1) return false

  sum = 0;
  for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  result = 11 - (sum % 11);
  let dv2 = result >= 10 ? 0 : result;

  return parseInt(cpf.charAt(10)) === dv2
}
