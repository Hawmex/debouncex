# nexbounce

Promise-based debouncer.

## Installation

`npm i nexbounce`

## Example

```js
import { Nexbounce } from 'nexbounce';

let counter = 0;

const nexbounce = new Nexbounce();

nexbounce.enqueue(() => (counter += 3));
nexbounce.enqueue(() => (counter += 1));
nexbounce.enqueue(() => (counter += 2));

setTimeout(() => console.log(couter)); // 2
```
