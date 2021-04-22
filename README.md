# `@buuhv/number-mask`

Crie máscaras para CPF, CNPJ, Telefone ou qualquer outro tipo de número com essa lib javascript

## Getting started

`npm install @buuhv/number-mask --save`

## Usage

```javascript
import Mask from '@buuhv/number-mask';

console.log(Mask.format(123456789, '000-000-000'));

console.log(Mask.removeMask('123-456-789'));

```
---
