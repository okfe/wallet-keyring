import { Keypair } from '@solana/web3.js';
import { derivePath } from 'ed25519-hd-key';
import { mnemonicToSeedSync } from './seed';

export const getAccount = (words: string, path: string): string => {
  const seed = mnemonicToSeedSync(words);
  const _seed = Buffer.from(seed).toString('hex');
  const derivedSeed = derivePath(path, _seed).key;
  return Keypair.fromSeed(derivedSeed).publicKey.toString();
};
