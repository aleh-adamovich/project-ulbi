type ClsModsType = Record<string, boolean | string>;

// eslint-disable-next-line max-len
export const classNames = (cls: string, mods: ClsModsType = {}, additionalCls: string[] = []): string => [
    cls,
    ...additionalCls.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key),
].join(' ');
