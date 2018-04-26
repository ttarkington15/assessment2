//If I had more time: make error messages aligned when all are displayed at once

var btn = getE('btnSubmit');
btn.addEventListener('click', submit);

var btn2 = getE('btnReset');
btn2.addEventListener('click', reset);

var inputs = ['firstName', 'lastName', 'emailAddress' ];
var ERROR_CLASS = 'invalid';

function submit() {
    var elm;
    var errorList = [];

    for (var i = 0; i < inputs.length; i++) {
        elm = getE(inputs[i]);
        if (elm.value === '') {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    }


    var email = getE('emailAddress');
    if (email.value.indexOf('@') == -1) {
        errorList.push('Enter a valid Email');
    }

    var howDid = getE('howDid');
    if (howDid.value === '') {
        howDid.classList.add(ERROR_CLASS);
        errorList.push('How did you find us? Please select an option');
    } else {
        howDid.classList.remove(ERROR_CLASS);
    }

    var whyNeed = getE('whyNeed');
        if (whyNeed.value === ''){
            errorList.push('Tell us why you need this blender');
            whyNeed.classList.add(ERROR_CLASS);
        }
        else {
            whyNeed.classList.remove(ERROR_CLASS);
        }

    var terms = getE('terms');
    if (terms.checked === false) {

        errorList.push('You must accept the terms and conditions');
    }


    var html
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for registering</h1>';
        reset();
    }

    getE('messages').innerHTML = html;
}

function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getE(inputs[i])
        elm.value = '';
        elm.classList.remove(ERROR_CLASS);
    }

    getE('messages').innerHTML = '';
    getE('whyNeed').value = '';
    whyNeed.classList.remove(ERROR_CLASS);
    getE('howDid').value = '';
    getE('terms').checked = false;
}

function getE(id) {
    return document.getElementById(id);
}







    
