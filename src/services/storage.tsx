// Define o formato esperado do objeto salvo no localStorage.
interface IDIoBank {
    login: boolean;
}

// Valor padrao usado para inicializar o armazenamento.
const dioBank = {
    login: false
}

// Le o valor salvo na chave principal da aplicacao.
export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

// Cria o valor inicial no localStorage.
export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

// Atualiza o objeto persistido.
export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
