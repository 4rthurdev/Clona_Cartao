document.getElementById('clear-button').addEventListener('click', function () {
    // Limpa os campos
    document.getElementById('security-test').reset();

    const message = document.getElementById('message');
    message.textContent = 'Tudo certo!';
    message.style.display = 'block';
});