// Many thanks to @tosuke
export type Tail<T extends any[]> = T extends [any, ...infer Rest]
  ? Rest
  : never

export type AnyFunction = (...args: any[]) => any
