import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildPaths } from './config/build/types/config';

const paths: IBuildPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    outputPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    srcPath: path.resolve(__dirname, 'src'),
};

export default (env: IBuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDevMode = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDevMode,
        port: PORT,
    });
};
