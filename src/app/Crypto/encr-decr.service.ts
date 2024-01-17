import { Injectable } from '@angular/core';
import CryptoES from 'crypto-es';
import { AES } from 'crypto-es/lib/aes';
import { CipherCfg } from 'crypto-es/lib/cipher-core';
import { Utf8, WordArray } from 'crypto-es/lib/core';
import { MD5 } from 'crypto-es/lib/md5.js';
import { WebStorageService } from '../services/web-storage.service';

@Injectable()
export class EncrDecrService {

  constructor(
    private _webStorage: WebStorageService
  ) { }
  public encryptedHelloWorld(): void {
    const rst = MD5("Hello Teranet").toString();
    console.log(rst);
  }
  public set(keys: string, value: string, store: boolean = false): string {
    let key = Utf8.parse(keys);
    let iv = CryptoES.enc.Utf8.parse(keys);
    let encrypted = AES.encrypt(Utf8.parse(value.toString()), key);
    if (store) {
      this.storeToLocalStorage(keys.substring(0, 5), encrypted.toString())
    }
    return encrypted.toString();
  }
  public get(keys: string, value: string, store: boolean = false): string {
    let _key: WordArray = Utf8.parse(keys);
    let _iv: WordArray = Utf8.parse(keys);
    let _cfg: CipherCfg = {
      iv: _iv,
      mode: CryptoES.mode.CBC,
      padding: CryptoES.pad.Pkcs7,
    };
    if (this.getFromLocalStorage(keys.substring(0, 5)) != '') {
      let localValue = this.getFromLocalStorage((keys.substring(0, 5)))
      let decrypted = AES.decrypt(localValue, _key, _cfg);
      return decrypted.toString()
    }
    return '';
  }

  private storeToLocalStorage(key: string, value: string) {
    if (key && null != key && value.length != 0) {
      this._webStorage.set(key, value);
    } else {
      console.log("EncrDecrService:storeToLocalStorage - No key found in encrypted value.")
    }
  }
  private getFromLocalStorage(key: string): string {
    return this._webStorage.get(key) == null ? '' : `${this._webStorage.get(key)}`;
  }
}
