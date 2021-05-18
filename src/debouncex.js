export class Debouncex {
  #taskWatcher = null;
  #callLatest;
  #cancelPrevious;

  /**
   *
   * @param {function} task A function to be added to the Debouncex instance queue.
   */

  enqueue(task) {
    if (this.#taskWatcher !== null) this.#cancelPrevious();

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
