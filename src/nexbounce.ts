export type TaskWatcher = Promise<void> | null;

type LatestCaller = (() => void) | null;
type PreviousCanceller = (() => void) | null;

export type NexbounceTask = () => void;

export class Nexbounce {
  #taskWatcher: TaskWatcher = null;
  #callLatest: LatestCaller = null;
  #cancelPrevious: PreviousCanceller = null;

  enqueue(task: NexbounceTask): void {
    if (this.#taskWatcher !== null) this.#cancelPrevious?.();

    this.#taskWatcher = new Promise((resolve: LatestCaller, reject: PreviousCanceller) => {
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
