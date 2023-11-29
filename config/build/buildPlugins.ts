import webpack, { WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(htmlPath: string, isDevMode: boolean): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: htmlPath,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevMode),
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
