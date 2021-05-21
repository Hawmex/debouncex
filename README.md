# nexbounce

A debouncer library based on microtasks.

It's easy to install and easy to use, besides being light-weight.

![npm](https://img.shields.io/npm/v/nexbounce)
![npm](https://img.shields.io/npm/dw/nexbounce)
![NPM](https://img.shields.io/npm/l/nexbounce)

## Installation

```
npm i nexbounce
```

## Example

```js
import { Nexbounce } from 'nexbounce';

let counter = 0;

const nexbounce = new Nexbounce();

nexbounce.enqueue(() => (counter += 3));
nexbounce.enqueue(() => (counter += 1));
nexbounce.enqueue(() => (counter += 2));

setTimeout(() => console.log(counter)); // 2
```
