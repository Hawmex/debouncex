export class Nexbounce {
  #taskWatcher: Promise<void> | null = null;
  #callLatest: (() => void) | null = null;
  #cancelPrevious: (() => void) | null = null;

  enqueue(task: () => void) {
    if (this.#taskWatcher !== null) this.#cancelPrevious?.();

    this.#taskWatcher = new Promise((resolve, reject) => {
      this.#callLatest = resolve;
      this.#cancelPrevious = reject;
    });

    this.#taskWatcher
      .then(task)
      .catch(() => {})
      .finally(() => (this.#taskWatcher = null));

    Promise.resolve().then(this.#callLatest);
  }
}
