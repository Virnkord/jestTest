const mysqrt = require("./testmodule")

test("Sqrt function 4 equals 2", () => {
  expect(mysqrt(4)).toBe(2)
})

test("Sqrt function 36 equals 6", () => {
  expect(mysqrt(36)).toBe(6)
})

test("Sqrt function 25 equals 5", () => {
  expect(mysqrt(25)).toBe(5)
})


