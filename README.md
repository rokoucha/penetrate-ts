# penetrate-ts

[![npm version](https://badge.fury.io/js/penetrate-ts.svg)](https://badge.fury.io/js/penetrate-ts)
[![CI](https://github.com/rokoucha/penetrate-ts/workflows/check/badge.svg)](https://github.com/rokoucha/penetrate-ts/actions?query=workflow%3Acheck)
[![codecov](https://codecov.io/gh/rokoucha/penetrate-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/rokoucha/penetrate-ts)

Simplest DI container for TypeScript

## How to use

```ts
import { Penetrable } from 'penetrable-ts'

// Define function and dependencies
const getUnixtimeContainer = Penetrable<[Date]>()(
  ([date]): number => Number(date) / 1000,
)

// Injection dependencies
const getUnixtime = getUnixtimeContainer(new Date('1970-01-01T00:00:00.000Z'))

// Call it!
const unixtime = getUnixtime() // => 0
```

## License

Copyright (c) 2020 Rokoucha

> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
> http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
