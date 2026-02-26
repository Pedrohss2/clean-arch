import { randomUUID as uuidv4 } from "node:crypto";

export abstract class Entity<T = any> {
  public readonly _id: string;
  public readonly props: T;

  constructor(props: T, id?: string) {
    this._id = id ?? uuidv4();
    this.props = props;
  }

  get id(): string {
    return this.id;
  }

  toJSON(): Required<{ id: string } & T> {
    return {
      id: this._id,
      ...this.props
    } as Required<{ id: string; } & T>;
  }
}
