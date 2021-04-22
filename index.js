"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mask = /** @class */ (function () {
    function Mask() {
    }
    /**
     * Formata o valor passada de acordo com a máscara fornecida
     * @param value valor a ser mascarado
     * @param valueMask máscara
     * @returns string
     */
    Mask.format = function (value, valueMask) {
        try {
            var currentValue = value.toString().replace(/\-|\.|\/|\(|\)| /g, '');
            var valuePosition = 0;
            var valueMasked = '';
            var totalChars = currentValue.length;
            var maskItem = new RegExp(/\-|\.|\/|\(|\)| /g);
            for (var i = 0; i <= totalChars; i++) {
                if (maskItem.test(valueMask.charAt(i))) {
                    valueMasked += valueMask.charAt(i);
                    totalChars++;
                }
                else {
                    valueMasked += currentValue.charAt(valuePosition);
                    valuePosition++;
                }
            }
            return valueMasked;
        }
        catch (error) {
            return valueMask;
        }
    };
    /**
     * Remove uma máscara aplicada
     * @param value valor em string
     * @returns number
     */
    Mask.removeMask = function (value) {
        if (!value)
            value = 0;
        return parseInt(value.toString().replace(/\D/g, ''));
    };
    return Mask;
}());
exports.default = Mask;
//# sourceMappingURL=index.js.map