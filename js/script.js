let form = $('.form-contact');

form.validate({
    errorElement: 'span',
    rules: {
        nome: 'required',
        email: {
            required: true,
            email: true
        },
        phone: 'required',
        text:'required',
    },
    messages: {
        nome: 'Oi, poderia me informar seu nome?',
        email: {
        required: 'Por favor, preciso do seu e-mail para poder entrar em contato',
        email: 'Por favor, digite um e-mail válido'
        },
        phone:'Por favor, digite seu telefone',
        text:'Por favor, digite uma mensagem'
    },
    

});