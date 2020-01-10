
import CryptoJS from 'crypto-js'

let nowData: any = new Date()
let nowTime = Date.parse(nowData).toString().substr(0, 10);

let IV = '8NONwyJtHeeccang';
let KEY = nowTime + '!@ecca';
let data = 'ABCDEFGH';


// 加密
export function encrypt(str: string): any {
    var key = CryptoJS.enc.Utf8.parse(KEY);
    var iv = CryptoJS.enc.Utf8.parse(IV);
    var encrypted = CryptoJS.AES.encrypt(str, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return {
        encrypted: encrypted.toString(),
        nowTime
    }
}

// 解密
export function decrypt(str: string): string {
    var key = CryptoJS.enc.Utf8.parse(KEY);
    var iv = CryptoJS.enc.Utf8.parse(IV);
    var decrypted = CryptoJS.AES.decrypt(str, key, { iv: iv, padding: CryptoJS.pad.Pkcs7 });
    return decrypted.toString(CryptoJS.enc.Utf8);
}