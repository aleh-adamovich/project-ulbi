type ClsModsType = Record<string, boolean | string>;

export const classNames = (cls: string, mods: ClsModsType, additionalCls: string): string => {
    return [
        cls,
        additionalCls,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ');
}