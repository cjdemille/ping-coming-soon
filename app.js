
const invalidText = document.querySelector('.invalid-feedback');
const emailInput = document.querySelector('#email')
const submit = document.querySelector('#submit')

const validateEmail = (e) => {
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailInput.value.match(validRegex)) {
        invalidText.classList.add('hidden');
        return true();
    } else {
        invalidText.classList.remove('hidden');
        emailInput.classList.add('invalid')
        return false;
    }
}

submit.addEventListener('click', validateEmail)