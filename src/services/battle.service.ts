import {inject, injectable, named} from "inversify";
import {BattleInterface} from "../interfaces/battle.interface";
import {IdentifierConstants, TagsConstants} from "../constants";
import {ServiceInterface} from "../interfaces/service.interface";

@injectable()
export class BattleService implements BattleInterface {
    @inject(IdentifierConstants.SERVICE) @named(TagsConstants.GOONGOL) public goongol: ServiceInterface
    @inject(IdentifierConstants.SERVICE) @named(TagsConstants.ITEMER) public itemer: ServiceInterface

    public fight(): string {
        return `
            ${this.goongol.name} vs ${this.itemer.name}
        `
    }
}
