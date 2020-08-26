export type PenetrableFunction<
  D extends any[],
  F extends (...args: any[]) => any
> = (deps: D, ...args: Parameters<F>) => ReturnType<F>

export class Penetrable<D extends any[], F extends (...args: any[]) => any> {
  #dependencies: D
  #target: PenetrableFunction<D, F>

  constructor(target: PenetrableFunction<D, F>) {
    this.#target = target
    this.#dependencies = [] as any
  }

  penetrate(...dependencies: D) {
    this.#dependencies = dependencies

    return (...args: Parameters<F>) => this.#target(this.#dependencies, ...args)
  }
}
