import {injectable} from "inversify";
import {ServiceInterface} from "../interfaces/service.interface";

@injectable()
export class ItemerService implements ServiceInterface {
    public name: string

    public constructor() {
        this.name = "Itemer Service"
    }

    sendSms() {
        console.log(this.name)
    }
}
