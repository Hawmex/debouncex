# debouncex

Promise-based debouncer.

## Installation

`npm i debouncex`

## Example

```js
import { Debouncex } from 'debouncex';

let counter = 0;

const debouncex = new Debouncex();

debouncex.enqueue(() => (counter += 3));
debouncex.enqueue(() => (counter += 1));
debouncex.enqueue(() => (counter += 2));

setTimeout(() => console.log(couter)); // 2
```
