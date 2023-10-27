export class NumberValidator {
    constructor(arg = {even:false,odd:false}){
        this.ev = arg.even
        this.od = arg.odd
    }
    isValid(argument) {
        if(this.ev){

           return typeof argument === 'number' && argument % 2 === 0
        } else if(this.od){

            return typeof argument === 'number' && argument % 2 !== 0
        } else {
            return typeof argument === 'number'
        }
    }
    even(){
        return new NumberValidator({even:true,odd:false})
    }
    odd() {
        return new NumberValidator({even:false,odd:true})
    }
}