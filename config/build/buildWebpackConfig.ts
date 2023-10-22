import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const {
        mode, paths: {
            entryPath, outputPath, htmlPath, srcPath,
        }, isDevMode, port,
    } = options;

    return {
        mode,
        entry: entryPath,
        output: {
            path: outputPath,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(htmlPath, isDevMode),
        module: {
            rules: buildLoaders(isDevMode),
        },
        resolve: buildResolvers(srcPath),
        devtool: isDevMode ? 'inline-source-map' : undefined,
        devServer: isDevMode ? buildDevServer(port) : undefined,
    };
}
