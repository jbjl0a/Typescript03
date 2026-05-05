import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

// Testes do servico responsavel por persistir dados no localStorage.
describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    // Verifica se a leitura usa a chave correta.
    it('Deve retornar o objeto na chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    // Verifica a criacao do valor inicial.
    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    // Verifica a atualizacao do valor salvo.
    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})
