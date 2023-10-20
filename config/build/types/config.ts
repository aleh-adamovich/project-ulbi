export type BuildModeType = 'development' | 'production';

export interface IBuildPaths {
    entryPath: string;
    outputPath: string;
    htmlPath: string;
    srcPath: string;
}

export interface IBuildOptions {
    mode: BuildModeType;
    paths: IBuildPaths;
    isDevMode: boolean;
    port: number;
}

export interface IBuildEnv {
    mode: BuildModeType;
    port: number;
}