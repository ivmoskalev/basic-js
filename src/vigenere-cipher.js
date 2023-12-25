const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const result = [];

    const repeatedKeyChars = [];
    let keyIndex = 0;

    for (let char of message) {
      if (this.alphabet.includes(char.toUpperCase())) {
        repeatedKeyChars.push(key[keyIndex % key.length].toUpperCase());
        keyIndex++;
      } else {
        repeatedKeyChars.push(char);
      }
    }

    const repeatedKey = repeatedKeyChars.join("");

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      if (this.alphabet.includes(char)) {
        const index = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(repeatedKey[i]);
        let newIndex = (index + keyIndex) % this.alphabet.length;

        const newChar = this.alphabet[newIndex];
        result.push(newChar);
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const result = [];

    const repeatedKeyChars = [];
    let keyIndex = 0;

    for (let char of encryptedMessage) {
      if (this.alphabet.includes(char.toUpperCase())) {
        repeatedKeyChars.push(key[keyIndex % key.length].toUpperCase());
        keyIndex++;
      } else {
        repeatedKeyChars.push(char);
      }
    }

    const repeatedKey = repeatedKeyChars.join("");

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i].toUpperCase();
      if (this.alphabet.includes(char)) {
        const index = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(repeatedKey[i]);
        let newIndex =
          (index - keyIndex + this.alphabet.length) % this.alphabet.length;

        const newChar = this.alphabet[newIndex];
        result.push(newChar);
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
