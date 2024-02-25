function formatCPF(input, error_id, confirmation_id) {
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
        validation_true(input, error_id, confirmation_id)
    }else{
        validation_false(input, error_id, confirmation_id)
    }

    valor = valor.substring(0, 14);

    input.value = valor;
}

function formatRG(input, error_id, confirmation_id) {
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

    validatorRG(input, error_id, confirmation_id)
}

function formatPhone(number) {
    var digits = number.value.replace(/\D/g, '')
    var formattedNumber = ''

    if (digits.length > 0) {
        formattedNumber += '(' + digits.substring(0, 2) + ')'
    }
    if (digits.length > 2) {
        formattedNumber += ' ' + digits.substring(2, 3) + ' '
    }
    if (digits.length > 3) {
        formattedNumber += digits.substring(3, 7)
    }
    if (digits.length > 7) {
        formattedNumber += '-' + digits.substring(7, 11)
    }

    number.value = formattedNumber
}

function formatSecudaryPhone(input, error_id, confirmation_id) {
    phone = input.value.replace(/\D/g, '')
    
    if(phone.length === 0){
        return validation_style(input, error_id, confirmation_id)
    }
    if (phone.length === 11) {
        input.value = phone.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4')
    } else if (phone.length === 10) {
        input.value = phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1)  $2-$3')
    } else {
        input.value = phone;
    }
    return validation_true(input, error_id, confirmation_id)
}

function formatBirth(input) {
    value = input.value.replace(/[^\d/]/g, '')
  
    // If they don't add the slash, do it for them...
    if(value.length === 2 || value.length === 5) {
      value += '/';
    }
  
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

function validatorEmail(email, error_id, confirmation_id) {
    const email_input = document.getElementById('email')

    let value = email.value
    let regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regex.test(value)){
        validation_true(email_input, error_id, confirmation_id)
    }else{
        validation_false(email_input, error_id, confirmation_id)
    }
}

function validatorRG(input, error_id, confirmation_id) {
    const rg = document.getElementById("rg")

    let value = input.value
    let regex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/

    if (regex.test(value)) {
        validation_true(rg, error_id, confirmation_id)

    } else {
        validation_false(rg, error_id, confirmation_id)
    }
}

function validatorPhone(input, error_id, confirmation_id) {
    var regex = /^\(\d{2}\) \d \d{4}-\d{4}$/

    let phone_number = input.value

    if (phone_number.length == 0){
        return validation_style(input)
    }
    if (regex.test(phone_number)){
        validation_true(input, error_id, confirmation_id)
    }else{
        validation_false(input, error_id, confirmation_id)
    }
}

function validatorDate(input, error_id, confirmation_id) {
    let dateString = input.value
    
    if(dateString.length === 0){
        return validation_style(input)
    }

    var regex = /^\d{2}\/\d{2}\/\d{4}$/
    if (!regex.test(dateString)) {
        validation_false(input, error_id, confirmation_id)
        return false;
    }
  
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
  
    let current_date = new Date()
    let current_year = current_date.getFullYear()
    if (year < 1000 || year > current_year || month === 0 || month > 12) {
        validation_false(input, error_id, confirmation_id)
        return false;
    }
  
    var daysInMonth = new Date(year, month, 0).getDate()
    if (day < 1 || day > daysInMonth) {
        validation_false(input, error_id, confirmation_id)
        return false
    }
    validation_true(input, error_id, confirmation_id)
    return true
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

function nameOnBlur(input, error_id, confirmation_id) {
    let caracters = input.value

    if(caracters.length > 0){
        let value = capitalizeWords(input.value)
    input.value = value
    return validation_true(input, error_id, confirmation_id)
    }
    return validation_style(input, error_id, confirmation_id)
}

function feedback(input, error_id, confirmation_id){
    div_error = document.getElementById(error_id)
    div_conf = document.getElementById(confirmation_id)
    
    function verify(element){
        if(element.classList.length >= 2){
            return element.classList.item(1)
        }
        return null
    }

    if(input.classList.contains('vld-false')){
        div_error.classList.remove(verify(div_error))
        div_conf.classList.remove(verify(div_conf))
        div_error.classList.add('custom-db')
        div_conf.classList.add('custom-dn')
        return true
    }
    
    if(input.classList.contains('vld-true')){
        div_error.classList.remove(verify(div_error))
        div_conf.classList.remove(verify(div_conf))
        div_error.classList.add('custom-dn')
        div_conf.classList.add('custom-db')
        return true
    }
    return false
}

function validation_style(btn_input){
    if(btn_input.value.length === 0){
        btn_input.classList.remove('vld-false')
        btn_input.classList.remove('vld-true')
        btn_input.classList.remove('custom-is-valid')
        btn_input.classList.remove('custom-is-invalid')
        return true
    }
    return false
}

function validation_true (btn_input, error_id, confirmation_id){
    btn_input.classList.remove('vld-false')
    btn_input.classList.add('vld-true')
    btn_input.classList.remove('custom-is-invalid')
    btn_input.classList.add('custom-is-valid')
    return feedback(btn_input, error_id, confirmation_id)
}

function validation_false (btn_input, error_id, confirmation_id){
    btn_input.classList.remove('vld-true')
    btn_input.classList.add('vld-false')
    btn_input.classList.remove('custom-is-valid')
    btn_input.classList.add('custom-is-invalid')
    return feedback(btn_input, error_id, confirmation_id)
}

function capitalizeWords(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
      return firstLetter.toUpperCase();
    });

}