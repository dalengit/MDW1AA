  import {
    kelvinToFarenheit,
    kelvinToCelsius,
  } from "./converterChallenge";
  
  // Kelvin to Farenheit

  describe("Kelvin to Farenheit", () => {
    it("Should throw an error when input value is not number", () => {
      const temp = "ABCD";
      expect(() => kelvinToFarenheit(temp).toThrow)
    })
  })

  // Kelvin to celsius

  describe()