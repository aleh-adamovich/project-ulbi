import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildPlugins(htmlPath: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: htmlPath
        }),
        new webpack.ProgressPlugin()
    ]
}
