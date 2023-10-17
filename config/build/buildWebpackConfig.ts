import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const {mode, paths: {entryPath, outputPath, htmlPath}, isDevMode, port} = options;

    return {
        mode,
        entry: entryPath,
        output: {
            path: outputPath,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(htmlPath),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDevMode ? 'inline-source-map' : undefined,
        devServer: isDevMode ? buildDevServer(port) : undefined,
    }
}
