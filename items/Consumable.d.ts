import { Item } from "./item";

export interface Consumable extends Item {
    use(): void;
    remove(): void;
}
