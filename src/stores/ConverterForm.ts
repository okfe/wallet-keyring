import { makeAutoObservable } from 'mobx';
import * as R from 'ramda';
import { DEFAULT_DERIVATION_PATH_MAP } from '../constants';

import { IConverterForm } from '../types';

export interface IConverterFormStore {
  converterForm: IConverterForm;

  derivationPath: string;

  setConverterForm: (converterForm: IConverterForm) => void;
}

export class ConverterFormStore implements IConverterFormStore {
  converterForm: IConverterForm = {
    mnemonic: '',
    symbol: '',
    purpose: '',
    coinType: '',
    account: '',
    change: '',
    addressIndex: '',
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get derivationPath(): string {
    const { symbol, mnemonic } = this.converterForm;
    if (!symbol || !mnemonic) {
      return '';
    }
    return DEFAULT_DERIVATION_PATH_MAP[symbol];
  }

  setConverterForm(converterForm: IConverterForm): void {
    this.converterForm = converterForm;
  }
}
