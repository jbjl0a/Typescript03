import { api } from "../api"

// Compara as credenciais digitadas com os dados retornados pela API simulada.
export const login = async (email: string, password: string): Promise<boolean> => {
    // Aguarda os dados antes de executar a validacao.
    const data = await api

    if(email !== data.email) {
        return false
    }

    if(password !== data.password) {
        return false
    }

    return true
}
