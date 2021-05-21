import assert from 'assert';
import { Nexbounce } from '../src/nexbounce.js';

it('should only call the last task in the queue', () => {
  let counter = 0;

  const nexbounce = new Nexbounce();

  nexbounce.enqueue(() => (counter += 3));
  nexbounce.enqueue(() => (counter += 1));
  nexbounce.enqueue(() => (counter += 2));

  setTimeout(() => assert.strictEqual(counter, 2));
});
