const Vehiculo = require("./Vehiculo");

class Turismo extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.velMax = 120;
    }

    acelerar(vel) {
        this.velocidad += vel;
        if (this.velocidad > this.velMax) {
            this.velocidad = this.velMax;
        }
    }

}

module.exports=Turismo;