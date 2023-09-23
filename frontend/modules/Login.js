import validator from "validator";

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    
    init() {
        this.events();
    }

    events(){
        if (!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        let error = false

        if (!validator.isEmail(emailInput.value)){
            this.criaErro('Email invalido')
            error = true
        }
        if ((passwordInput.value.length < 3 || passwordInput.value.length > 50)){
            this.criaErro('Senha invalida')
            error = true
        }

        if(!error) el.submit()

        console.log(emailInput.value, passwordInput.value)
    }

    criaErro(msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        //campo.insertAdjacentElement('afterend', div);
      }
}

//adc servidor