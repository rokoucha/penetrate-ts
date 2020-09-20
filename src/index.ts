/**
 * penetrate-ts
 * Copyright (c) 2020 Rokoucha
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { AnyFunction, Tail } from './utils'

export type PenetrableFunction<D extends any[], F extends AnyFunction> = (
  deps: D,
  ...args: Parameters<F>
) => ReturnType<F>

export function Penetrable<D extends any[]>() {
  return <F extends PenetrableFunction<D, AnyFunction>>(target: F) => (
    ...dependencies: D
  ) => (...args: Tail<Parameters<F>>): ReturnType<F> =>
    target(dependencies, ...args)
}
