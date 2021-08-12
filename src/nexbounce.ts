type TaskWatcher = Promise<void>;
type LatestCaller = () => void;
type PreviousCanceller = () => void;

export type Task = () => void;

export class Nexbounce {
  #taskWatcher?: TaskWatcher;
  #callLatest?: LatestCaller;
  #cancelPrevious?: PreviousCanceller;

  enqueue(task: Task) {
    if (this.#taskWatcher !== undefined) this.#cancelPrevious?.();

    this.#taskWatcher = new Promise((resolve, reject) => {
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
