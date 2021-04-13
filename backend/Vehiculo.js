class Vehiculo {

    constructor(marca,modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        this.direccion = 0; //0-360
    }

    acelerar(vel) {
        this.velocidad += vel;
    }
    decelerar(vel) {
        this.velocidad -= vel;
        if(this.velocidad<0){
            this.velocidad=0;
        }
    }
    verDatos() {
        return `${this.marca}(${this.modelo})- velocidad actual: ${this.velocidad}`
    }
}


module.exports=Vehiculo;
