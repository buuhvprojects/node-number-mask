# `@buuhv/number-mask`

Crie máscaras para CPF, CNPJ, Telefone ou qualquer outro tipo de número com essa lib javascript

## Getting started

`npm install @buuhv/number-mask --save`

## Usage

```javascript
import Mask from '@buuhv/number-mask';

console.log(Mask.format(01123456789, '(00) 0-0000-0000'));
console.log(Mask.format(44013795000148, '00.000.000/0000-00'));//cnpj

console.log(Mask.removeMask('(01) 1-2345-6789'));

```
---
