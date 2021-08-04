import "reflect-metadata";

import { Container } from "inversify"
import {IdentifierConstants, TagsConstants} from "../constants";
import {ServiceInterface} from "../interfaces/service.interface";
import {GoongolService} from "../services/Goongol.service";
import {ItemerService} from "../services/Itemer.service";
import {BattleInterface} from "../interfaces/battle.interface";
import {BattleService} from "../services/battle.service";


const container = new Container()

container.bind<ServiceInterface>(IdentifierConstants.SERVICE).to(GoongolService).whenTargetNamed(TagsConstants.GOONGOL)
container.bind<ServiceInterface>(IdentifierConstants.SERVICE).to(ItemerService).whenTargetNamed(TagsConstants.ITEMER)
container.bind<BattleInterface>(IdentifierConstants.BATTLE).to(BattleService)

export default container
