const Vehiculo = require("./Vehiculo");

class Deportivo extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.velMax = 200;
    }

    acelerar(vel) {
        this.velocidad += vel;
        if (this.velocidad > this.velMax) {
            this.velocidad = this.velMax;
        }
    }

}

module.exports=Deportivo;