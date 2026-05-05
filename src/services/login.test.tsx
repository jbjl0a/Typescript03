import { login } from "./login"

// Testes da regra de login baseada no email retornado pela API simulada.
describe('login', () => {

    const mockEmail = 'test@teste.com'
    const mockPassword = '123456'

    // Deve retornar true quando email e senha corresponderem aos dados mockados.
    it('Deve validar as credenciais esperadas', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    // Deve retornar false quando o email nao corresponder ao esperado.
    it('Deve rejeitar um email invalido', async() => {
        const response = await login('email@invalido.com', mockPassword)
        expect(response).toBeFalsy()
    })

    // Deve retornar false quando a senha nao corresponder ao esperado.
    it('Deve rejeitar uma senha invalida', async() => {
        const response = await login(mockEmail, '000000')
        expect(response).toBeFalsy()
    })
})
