type ClsModsType = Record<string, boolean | string>;

export const classNames = (cls: string, mods?: ClsModsType, additionalCls?: string[]): string => [
    cls,
    ...additionalCls,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key),
].join(' ');
