import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Filled extends EthereumEvent {
  get params(): FilledParams {
    return new FilledParams(this);
  }
}

export class FilledParams {
  _event: Filled;

  constructor(event: Filled) {
    this._event = event;
  }

  get makerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get makerAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get makerToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get takerAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get takerAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get takerToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get expiration(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Canceled extends EthereumEvent {
  get params(): CanceledParams {
    return new CanceledParams(this);
  }
}

export class CanceledParams {
  _event: Canceled;

  constructor(event: Canceled) {
    this._event = event;
  }

  get makerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get makerAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get makerToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get takerAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get takerAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get takerToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get expiration(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Failed extends EthereumEvent {
  get params(): FailedParams {
    return new FailedParams(this);
  }
}

export class FailedParams {
  _event: Failed;

  constructor(event: Failed) {
    this._event = event;
  }

  get code(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get makerAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get makerAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get makerToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get takerAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get takerAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get takerToken(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get expiration(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class AirSwap extends SmartContract {
  static bind(address: Address): AirSwap {
    return new AirSwap("AirSwap", address);
  }

  fills(param0: Bytes): boolean {
    let result = super.call("fills", [EthereumValue.fromFixedBytes(param0)]);
    return result[0].toBoolean();
  }
}
