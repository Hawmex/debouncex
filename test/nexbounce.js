import assert from 'assert';
import { Nexbounce } from '../src/nexbounce.js';

it('should batch calls', () => {
  let counter = 0;

  const nexbounce = new Nexbounce();
  const increment = () => (counter += 1);

  nexbounce.enqueue(increment);
  nexbounce.enqueue(increment);
  nexbounce.enqueue(increment);

  setTimeout(() => assert.strictEqual(counter, 1));
});

it('should call last task in the batch', () => {
  let counter = 0;

  const nexbounce = new Nexbounce();

  nexbounce.enqueue(() => (counter += 3));
  nexbounce.enqueue(() => (counter += 1));
  nexbounce.enqueue(() => (counter += 2));

  setTimeout(() => assert.strictEqual(counter, 2));
});
