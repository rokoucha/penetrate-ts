import { Penetrable } from '../index'

describe('Penetrable', () => {
  it('returns injectable function generator', () => {
    expect(Penetrable<[Date]>()).toBeDefined()
  })

  it('returns dependency injectable function', () => {
    expect(
      Penetrable<[Date]>()(([date]): string => date.toISOString()),
    ).toBeDefined()
  })

  it('returns dependency injected function', () => {
    expect(
      Penetrable<[Date]>()(([date]): string => date.toISOString())(new Date(0)),
    ).toBeDefined()
  })

  it('executed successfully', () => {
    expect(
      Penetrable<[Date]>()(([date]): string => date.toISOString())(
        new Date(0),
      )(),
    ).toEqual('1970-01-01T00:00:00.000Z')
  })
})
