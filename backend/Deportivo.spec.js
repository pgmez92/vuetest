const Deportivo = require("./Deportivo");


describe("Test", () => {
    let y_wing;

    beforeEach(() => {
        y_wing = new Deportivo("lamborgini", "murcielago");
    })

    afterEach(() => {   
        y_wing.velocidad = 0;
    })

    describe("Test de Deportivo", () => {
        test("Comprobar que la velMax no pasa de 200", () => {
            y_wing.acelerar(300);
            expect(y_wing.velocidad).toBe(200);
        })
    })
})
