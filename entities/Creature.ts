import { Attacks } from "./Attacks";
import { Types } from "./Types";

export default interface Creature {
  "name": String,
  "health": Number,
  "attack": Number,
  "defence": Number,
  "types": Types,
  "attacks": Attacks
}
