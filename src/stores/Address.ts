import { makeAutoObservable } from 'mobx';

export interface IAddress {
  path: string;
  address: string;
}

export interface IAddressStore {
  addresses: IAddress[];

  push: (address: IAddress) => void;

  clear: () => void;
}

export class AddressStore implements IAddressStore {
  addresses: IAddress[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  push(address: IAddress): void {
    this.addresses = [...this.addresses, address];
  }

  clear(): void {
    this.addresses = [];
  }
}
