import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildPaths} from "./config/build/types/config";

const paths: IBuildPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.ts'),
    outputPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDevMode = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDevMode
});

export default config;
