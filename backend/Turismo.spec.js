const Turismo = require("./Turismo");


describe("Test", () => {
    let tie;

    beforeEach(() => {
        tie = new Turismo("citroen", "berlingo");
    })

    afterEach(() => {
        tie.velocidad = 0;
    })


    describe("Test de Turismo", () => {
        test("Comprobar que la velMax no pasa de 120", () => {
            tie.acelerar(200);
            expect(tie.velocidad).toBe(120);
        })

    })
})
