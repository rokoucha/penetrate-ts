// Many thanks to @tosuke
type Tail<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never

type AnyFunction = (...args: any[]) => any

export type PenetrableFunction<D extends any[], F extends AnyFunction> = (
  deps: D,
  ...args: Parameters<F>
) => ReturnType<F>

export class Penetrable<D extends any[], F extends AnyFunction> {
  #dependencies: D
  #target: PenetrableFunction<D, F>

  constructor(target: PenetrableFunction<D, F>) {
    this.#dependencies = [] as any
    this.#target = target as PenetrableFunction<D, typeof target>
  }

  penetrate(...dependencies: D) {
    this.#dependencies = dependencies

    const target = this.#target

    return (...args: Tail<Parameters<typeof target>>) =>
      target(this.#dependencies, ...args)
  }
}
