import { Penetrable } from './penetrator'

class ExampleClass {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  log() {
    console.log(this.#name)
  }

  symbol() {
    return Symbol(this.#name)
  }
}

const exampleFunction = new Penetrable<
  [ExampleClass, Date],
  (hoge: string) => void
>(([instance, date], hoge) => {
  console.log(hoge)
  console.log(instance.symbol())
  console.log(date.toISOString())
})

const exampleInstance = new ExampleClass('puyo')
const exmapleDate = new Date()

exampleFunction.penetrate(exampleInstance, exmapleDate)('hoge')
