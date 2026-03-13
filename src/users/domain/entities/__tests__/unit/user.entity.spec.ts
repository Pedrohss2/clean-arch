import { UserEntity, UserProps } from "../../user.entity"
import { UserDataBuilder } from "@/users/domain/testing/helper/user-data-builder";

describe("UserEntity unit tests", () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});

    sut = new UserEntity(props);
  })

  it("Contructor method", () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
  })

  it("Getter of name field", () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(props.name);
    expect(typeof sut.name).toBe("string");
  })

  it("Setter of name field", () => {
    sut['name'] = "new name test";

    expect(sut.props.name).toEqual("new name test");
    expect(typeof sut.name).toBe("string");
  })

  it("Getter of email field", () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(props.email);
    expect(typeof sut.email).toBe("string");
  })

  it("Getter of password field", () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(props.password);
    expect(typeof sut.password).toBe("string");
  })

  it("Setter of password field", () => {
    sut['password'] = "new password test";

    expect(sut.props.password).toEqual("new password test");
    expect(typeof sut.password).toBe("string");
  })

  it("Getter of createdAt field", () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  })

  it("Setter update a user", () => {
    sut.update("new name test");

    expect(sut.props.name).toEqual("new name test");
  })

  it("Should update the password field", () => {
    sut.updatePassword("new password test");

    expect(sut.props.password).toEqual("new password test");
  })
})


