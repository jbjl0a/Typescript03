// Define o formato da conta mockada usada pelo projeto.
export interface AccountData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

// Simula uma resposta de API com os dados de uma conta bancaria.
const conta: AccountData = {
    email: 'test@teste.com',
    password: '123456',
    name: 'tester test',
    balance: 2000.00,
    id: '1'
}

// Cria uma Promise tipada para reproduzir atraso de rede e permitir o uso de async/await.
export const api: Promise<AccountData> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
