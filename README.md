# nexbounce

A debouncer library based on microtasks.

It's easy to install and easy to use, besides being light-weight.

![npm](https://img.shields.io/npm/v/nexbounce)
![npm](https://img.shields.io/npm/dw/nexbounce)
![NPM](https://img.shields.io/npm/l/nexbounce)

## Demo

You can try the demo [here](https://codepen.io/Hawmed/pen/bGqgGrR).

## Installation

```
npm i nexbounce
```

## Definition (TypeScript)

```ts
declare type Task = () => void;

declare class Nexbounce {
  enqueue(task: Task): void;
}
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
