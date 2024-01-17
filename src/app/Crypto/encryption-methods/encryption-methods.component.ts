import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CryptoES from 'crypto-es';
import { Utf8 } from 'crypto-es/lib/core';
import { AES } from 'crypto-es/lib/aes';
import { CipherCfg } from 'crypto-es/lib/cipher-core';

@Component({
  selector: 'app-encryption-methods',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encryption-methods.component.html',
  styleUrls: ['./encryption-methods.component.scss']
})
export class EncryptionMethodsComponent {
  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  decrypted!: string;
  request!: string;
  response!: string;
  constructor() {
    this.encryptUsingAES256();
  }
  encryptUsingAES256() {
    let _key = Utf8.parse(this.tokenFromUI);
    let _iv = Utf8.parse(this.tokenFromUI);
    let cfg: CipherCfg = {
      iv: _iv,
      mode: CryptoES.mode.ECB,
      padding: CryptoES.pad.Pkcs7
    }
    let encryptedString = AES.encrypt(
      JSON.stringify(this.request),
      _key, cfg)
    console.log("Encrypted Message:", encryptedString.toString());
    this.encrypted = encryptedString.toString();
    this.response = this.encrypted;
  }
  decryptUsingAES256() {
    let _key = Utf8.parse(this.tokenFromUI);
    let _iv = Utf8.parse(this.tokenFromUI);
    let cfg: CipherCfg = {
      iv: _iv,
      mode: CryptoES.mode.ECB,
      padding: CryptoES.pad.Pkcs7
    }
    this.decrypted = AES.decrypt(this.response, _key, cfg).toString(Utf8);
  }

}
