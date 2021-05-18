import assert from 'assert';
import { Debouncex } from '../src/debouncex.js';

it('should batch calls', () => {
  let counter = 0;

  const debouncex = new Debouncex();
  const increment = () => (counter += 1);

  debouncex.enqueue(increment);
  debouncex.enqueue(increment);
  debouncex.enqueue(increment);

  setTimeout(() => assert.strictEqual(counter, 1));
});

it('should call last task in the batch', () => {
  let counter = 0;

  const debouncex = new Debouncex();

  debouncex.enqueue(() => (counter += 3));
  debouncex.enqueue(() => (counter += 1));
  debouncex.enqueue(() => (counter += 2));

  setTimeout(() => assert.strictEqual(counter, 2));
});
