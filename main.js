const form = document.getElementById('form-cadastro');

function validanome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeCompleto = document.getElementById('nome-completo');
    if (!validanome(nomeCompleto.value)) {
        alert('Nome nao esta completo')
    } else {
        alert('Tudo certo')
    }
})

console.log(form);