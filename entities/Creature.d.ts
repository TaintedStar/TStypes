import { Attacks } from "./Attacks";
import { Types } from "./Types.d";

export interface Creature {
  name: String,
  health: Number,
  attack: Number,
  defence: Number,
  types: Types,
  attacks: Attacks
}
