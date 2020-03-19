import { Item } from "./Item";

export interface Consumable extends Item {
    use(): void;
    remove(): void;
}
