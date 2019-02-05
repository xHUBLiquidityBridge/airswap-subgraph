import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class Trade extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Trade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Trade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Trade", id.toString(), this);
  }

  static load(id: string): Trade | null {
    return store.get("Trade", id) as Trade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get makerAddress(): string {
    let value = this.get("makerAddress");
    return value.toString();
  }

  set makerAddress(value: string) {
    this.set("makerAddress", Value.fromString(value));
  }

  get takerAddress(): string {
    let value = this.get("takerAddress");
    return value.toString();
  }

  set takerAddress(value: string) {
    this.set("takerAddress", Value.fromString(value));
  }

  get makerAmount(): string {
    let value = this.get("makerAmount");
    return value.toString();
  }

  set makerAmount(value: string) {
    this.set("makerAmount", Value.fromString(value));
  }

  get takerAmount(): string {
    let value = this.get("takerAmount");
    return value.toString();
  }

  set takerAmount(value: string) {
    this.set("takerAmount", Value.fromString(value));
  }

  get makerToken(): string {
    let value = this.get("makerToken");
    return value.toString();
  }

  set makerToken(value: string) {
    this.set("makerToken", Value.fromString(value));
  }

  get takerToken(): string {
    let value = this.get("takerToken");
    return value.toString();
  }

  set takerToken(value: string) {
    this.set("takerToken", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get expiration(): i32 {
    let value = this.get("expiration");
    return value.toI32();
  }

  set expiration(value: i32) {
    this.set("expiration", Value.fromI32(value));
  }

  get nonce(): i32 {
    let value = this.get("nonce");
    return value.toI32();
  }

  set nonce(value: i32) {
    this.set("nonce", Value.fromI32(value));
  }
}
