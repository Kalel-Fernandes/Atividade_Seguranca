function cadastrarUsuario(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    console.log(nome)
    console.log(email)
    console.log(senha)

    body = {
        "nome": nome,
        "email": email,
        "senha": senha 
    }
}