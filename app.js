
const invalidText = document.querySelector('.invalid-feedback');
const emptyText = document.querySelector('.empty')
const emailInput = document.querySelector('#email')
const submit = document.querySelector('#submit')

const validateEmail = (e) => {
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.length > 0) {
        if (emailInput.value.match(validRegex)) {
            invalidText.classList.add('hidden');
            emptyText.classList.add('hidden');
            return true();
        } else {
            invalidText.classList.remove('hidden');
            emptyText.classList.add('hidden');
            emailInput.classList.add('invalid')
            return false;
        }
    } else {
        invalidText.classList.add('hidden');
        emptyText.classList.remove('hidden');
    }

}

submit.addEventListener('click', validateEmail)