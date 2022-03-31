const refs = {
    loginForm: document.querySelector('.login-form'),
    inputEmail: document.querySelector('[name="email"]'),
    inputPassword: document.querySelector('[name="password"]'),
    submitBtn: document.querySelector('[type="submit"]'),
};
console.log(refs);

refs.loginForm.addEventListener('submit', onloginFormSubmit);
function onloginFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value && password.value) {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data);
        event.currentTarget.reset();
        return;
    }

    alert('Все поля должны быть заполнены!!!');
};

refs.inputPassword.setAttribute('autocomplete', 'on');