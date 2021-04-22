class Mask {
    /**
     * Formata o valor passada de acordo com a máscara fornecida
     * @param value valor a ser mascarado
     * @param valueMask máscara
     * @returns 
     */
    public static format(value = '', valueMask = '') {
        try {
            const currentValue = value.toString().replace(/\-|\.|\/|\(|\)| /g, '');

            let valuePosition = 0;
            let valueMasked = '';
            let totalChars = currentValue.length;
            const maskItem = new RegExp(/\-|\.|\/|\(|\)| /g)
            for (let i = 0; i <= totalChars; i++) {
                if (maskItem.test(valueMask.charAt(i))) {
                    valueMasked += valueMask.charAt(i);
                    totalChars++;
                } else {
                    valueMasked += currentValue.charAt(valuePosition);
                    valuePosition++;
                }
            }
            return valueMasked;
        } catch (error) {
            return valueMask;
        }
    }
}
export default Mask;