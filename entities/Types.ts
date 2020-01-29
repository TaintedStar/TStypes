export type Type = {
    name: String,
    weakAgainst: Types,
    effectiveAgainst: Types,
    superEffectiveAgainst: Types,
};
export type Types = Array<Type>;