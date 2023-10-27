import { ArraySchema } from "./ArraySchema.js"
import { NumberValidator } from "./NumberSchema.js"
export default class Validator {  

 number() {
    return new NumberValidator()
 }

 array() {
    return new ArraySchema()

 }
 object() {

 }
}