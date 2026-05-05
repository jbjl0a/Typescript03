// Funcao pura usada nos exemplos iniciais de teste.
export const soma = (num: number): number => {
    return num + 1
}

// Exemplo de regra condicional com retorno tipado por uniao.
export const multiplica = (num: number, mult: number): number | string => {
    // A regra aceita apenas multiplicadores 2 ou 3.
    if(mult === 2 || mult === 3) {
        return num * mult
    }

    return 'Multiplicador n\u00e3o aceito'
}
