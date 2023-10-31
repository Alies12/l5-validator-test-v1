/* eslint-disable */
import ArraySchema from './ArraySchema.js';
import NumberValidator from './NumberSchema.js';
import Objectschema from './ObjectSchema.js';

export default class Validator {
  number() {
    return new NumberValidator();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new Objectschema();
  }
}
