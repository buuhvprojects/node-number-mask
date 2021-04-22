declare class Mask {
    /**
     * Formata o valor passada de acordo com a máscara fornecida
     * @param value valor a ser mascarado
     * @param valueMask máscara
     * @returns
     */
    static format(value?: string, valueMask?: string): string;
}
export default Mask;
