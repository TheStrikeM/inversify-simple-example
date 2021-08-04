import {injectable} from "inversify";
import {ServiceInterface} from "../interfaces/service.interface";

@injectable()
export class GoongolService implements ServiceInterface {
    public name: string

    public constructor() {
        this.name = "Goongol Service"
    }

    sendSms() {
        console.log(this.name)
    }
}
