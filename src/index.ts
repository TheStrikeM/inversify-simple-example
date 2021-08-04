import container from "./config/inversify.config";
import {BattleInterface} from "./interfaces/battle.interface";
import {IdentifierConstants} from "./constants";

const testBattle = container.get<BattleInterface>(IdentifierConstants.BATTLE)

console.log(testBattle.fight())
