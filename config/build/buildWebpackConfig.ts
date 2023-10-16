import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig({mode, paths: {entryPath, outputPath, htmlPath}, isDevMode}: IBuildOptions): webpack.Configuration {
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
    }
}
