const Vehiculo = require("./Vehiculo");


describe("Test", () => {

    let halcon;

    beforeEach(() => {
        halcon = new Vehiculo("renaul", "laguna");        
    })

    afterEach(() => {
        halcon.velocidad = 0;
    })

    describe("Test de TODOS los VEHICULOS", () => {
        test("Comprobar que al inicializar un vehiculo la velocidad es 0", () => {
            expect(halcon.velocidad).toBe(0);
        })
        test("comprobar la aceleracion", () => {
            halcon.acelerar(100);
            expect(halcon.velocidad).toBe(100);
        })
        test("comprobar la deceleracion", () => {
            halcon.decelerar(100);
            expect(halcon.velocidad).toBe(0);
        })

    })

})
