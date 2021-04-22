declare class Mask {
    /**
     * Formata o valor passada de acordo com a máscara fornecida
     * @param value valor a ser mascarado
     * @param valueMask máscara
     * @returns string
     */
    static format(value: number, valueMask: string): string;
    /**
     * Remove uma máscara aplicada
     * @param value valor em string
     * @returns number
     */
    static removeMask(value: number): number;
}
export default Mask;
