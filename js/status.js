export default class status{
    constructor(success, message, code = null){
        this.success = success;
        this.message = message;
        this.code = code;
    }
}