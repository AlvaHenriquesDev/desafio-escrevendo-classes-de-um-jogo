const tipo = 'Guerreiro'
const golpe = 'Espada'

function atacar() {
    const messageElement = document.querySelector('#card__action_result');
     messageElement.innerText = `O ${tipo} atacou usando ${golpe}`;
     return messageElement
}