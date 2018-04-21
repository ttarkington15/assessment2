var btn = getE('btnSubmit');
btn.addEventListener('click', submit);


var inputs = ['firstName', 'lastName', 'emailAddress'];
var error = "invalid";

function submit (){
    var inputsValue;
    var errorMessages = [];

    for (var i = 0; i < inputs.length; i++) {
        inputsValue = getE(inputs[i]);
        if (inputsValue.value === '') {
            errorMessages.push(inputsValue.placeholder + ' is required');
            inputsValue.classList.add(error);
        } else {
            inputsValue.classList.remove(error);
        }
    }

    var emailAtSign = getE('emailAddress');
    if (emailAtSign.value.indexOf('@') == -1) {
        errorMessages.push('Enter a valid Email');
    }

    var emailDotCom = getE('emailAddress');
    if (emailDotCom.value.indexOf('.com') == -1) {
        errorMessages.push('Enter a valid Email');
    }

    var howDid = getE('findUs');
    if (howDid.value === '') {
        howDid.classList.add(error);
        errorMessages.push('Please select an option');
    } else {
        howDid.classList.remove(error);
    }

    var whyNeedText = getE('whyNeed');
    if (whyNeedText.value === ''){
        whyNeedText.classList.add(error);
        errorMessages.push('Please tell us why you need this blender')
    }else {
        whyNeedText.classList.remove(error);
    }

    var terms = getE('terms');
    if (terms.checked === false) {
        errorMessages.push('You must accept the terms and conditions');
    }

    function getE(id) {
        return document.getElementById(id);
    }


}

