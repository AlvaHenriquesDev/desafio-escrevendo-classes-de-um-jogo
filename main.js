class Heroi {
    constructor(role, weapon) {
        this.role = role,
        this.weapon = weapon
    }

    atacar() {
        const messageElement = document.querySelector('#card__action_result');
        messageElement.innerText = `O ${this.role} atacou usando ${this.weapon}`;
        return messageElement
    }
}

const class1 = new Heroi('Guerreiro', 'Excalibur')
const class2 = new Heroi('Mago', 'Bola de Fogo')
const class3 = new Heroi('Ladino', 'Adaga Envenenada')
const class4 = new Heroi('Paladino','Luz Divina')
const class5 = new Heroi('Arqueiro', 'Flecha de Prata')