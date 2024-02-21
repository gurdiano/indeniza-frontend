function formatCPF(input) {
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

    valor = valor.substring(0, 14);

    input.value = valor;
}

function formatRG(input) {
    var value = input.value

    if(value.length <= 4){
        value = value.replace(/(\w{2})(\w)/, '$1.$2')
    }

    if(value.length <= 7) {
        value = value.replace(/(\w{3})(\w)/, '$1.$2')
    }

    if(value.length > 9) {
        value = value.replace(/(\w{3})(\w)/, '$1-$2')
    }

    value = value.substring(0, 12);

    input.value = value
}

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

const cpf_input = document.getElementById('cpf')

cpf_input.addEventListener('focus', function() {
    
    //parei, eu ia copiar o :focus dps fazer uma logica aqui para aplicar ele na validacao...
})
