# nexbounce

Promise-based debouncer.

![npm](https://img.shields.io/npm/v/nexbounce)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/nexbounce?label=minzipped%20size)
![NPM](https://img.shields.io/npm/l/nexbounce)

## Installation

```
$ npm i nexbounce
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
