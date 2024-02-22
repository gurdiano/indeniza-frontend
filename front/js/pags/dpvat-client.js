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

function formatRG(input) {
    var value = input.value
    let regex_p1 = /\./
    let regex_p2 =/(?:\.[^.]*){2}/

    if(value.length > 2 && !regex_p1.test(value)){
        value = value.replace(/(\w{2})(\w)/, '$1.$2')
    }

    if(value.length > 5 && !regex_p2.test(value)) {
        value = value.replace(/(\w{3})(\w)/, '$1.$2')
    }

    if(value.length > 9) {
        value = value.replace(/(\w{3})(\w)/, '$1-$2')
    }

    value = value.substring(0, 12)
    input.value = value

    validatorRG(input)
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

function validatorEmail(email) {
    const email_input = document.getElementById('email')

    let value = email.value
    let regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regex.test(value)){
        validation_true(email_input)
    }else{
        validation_false(email_input)
    }
}

function validatorRG(input) {
    const rg = document.getElementById("rg")

    let value = input.value
    let regex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/

    if (regex.test(value)) {
        validation_true(rg)

    } else {
        validation_false(rg)
    }
}

function firstName(input) {
    let value = input.value.replace(/[^\p{L}]/gu, '')
    value = value.substring(0,12)
    input.value = value
}

function lastName(input) {
    let value = input.value.replace(/[^\p{L}\s]/gu, '')
    value = value.substring(0,24)
    input.value = value
}

function nameOnBlur(input) {
    let value = capitalizeWords(input.value)
    input.value = value
    validation_true(input)
}

function validation_true (btn_input){
    btn_input.classList.remove('vld-false')
    btn_input.classList.add('vld-true')
}

function validation_false (btn_input){
    btn_input.classList.remove('vld-true')
    btn_input.classList.add('vld-false')
}

function capitalizeWords(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
      return firstLetter.toUpperCase();
    });

}