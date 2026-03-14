import { ClassValidatorFields } from "../../class-validator-fields";
import * as classValidator from "class-validator";

class StubClassValidatorFields extends ClassValidatorFields<{field: string}> {}

describe("ClassValidatorFields Unit Tests", () => {

  it("should initialize errors and validatedData variables with null", () => {
    const sut = new StubClassValidatorFields();

    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  })

  it("should validate with errors", () => {
    const spy = jest.spyOn(classValidator, "validateSync")

    spy.mockReturnValue([
      { property: "field", constraints: { isRequired: "field is required" } }
    ])

    const sut = new StubClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();
    expect(spy).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toStrictEqual({ field: ["field is required"] });
  })

  it("should validate whithout errors", () => {
    const spy = jest.spyOn(classValidator, "validateSync")

    spy.mockReturnValue([])

    const sut = new StubClassValidatorFields();

    expect(sut.validate({ field: "test"})).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(sut.validatedData).toStrictEqual({ field: "test" });
    expect(sut.errors).toMatchObject({});
  })

})
