/* eslint-disable */
export default class ArraySchema {
  constructor(number = +Infinity) {
    this.leng = number;
  }

  isValid(argument) {
    if (argument === null) {
      return false;
    }
    if (this.leng !== +Infinity) {
      return typeof argument === 'object' && argument.length === this.leng;
    }
    return typeof argument === 'object';
  }

  length(argument) {
    return new ArraySchema(argument);
  }
}
