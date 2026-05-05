import { soma, multiplica } from './soma'

// Testes simples usados no curso para introduzir assertions e regras de negocio.
describe('soma', () => {
    // Verifica um caso basico da funcao soma.
    it('deve somar 1 ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    // Valida a multiplicacao com multiplicador permitido.
    it('deve multiplicar o numero por dois', () => {
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    // Valida outro valor permitido pela regra.
    it('deve multiplicar o numero por 3', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    // Garante a mensagem de erro para valores nao aceitos.
    it('Deve informar um erro para multiplicador invalido', () => {
        const value = multiplica(2, 4)
        expect(value).toBe('Multiplicador n\u00e3o aceito')
    })
})
