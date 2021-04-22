"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mask = /** @class */ (function () {
    function Mask() {
    }
    /**
     * Formata o valor passada de acordo com a máscara fornecida
     * @param value valor a ser mascarado
     * @param valueMask máscara
     * @returns
     */
    Mask.format = function (value, valueMask) {
        if (value === void 0) { value = ''; }
        if (valueMask === void 0) { valueMask = ''; }
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
    return Mask;
}());
exports.default = Mask;
//# sourceMappingURL=index.js.map