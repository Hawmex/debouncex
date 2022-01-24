export class Debouncer {
  #taskWatcher?: Promise<void>;
  #callLatest?: () => void;
  #cancelPrevious?: () => void;

  enqueue(task: () => void) {
    if (this.#taskWatcher !== undefined) this.#cancelPrevious?.();

    this.#taskWatcher = new Promise<void>((resolve, reject) => {
      this.#callLatest = resolve;
      this.#cancelPrevious = reject;
    });

    this.#taskWatcher
      .then(task)
      .catch(() => {})
      .finally(() => (this.#taskWatcher = undefined));

    queueMicrotask(this.#callLatest!);
  }
}
