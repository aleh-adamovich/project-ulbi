import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(isDevMode: boolean): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        // eslint-disable-next-line max-len
                        localIdentName: isDevMode ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // порядок loaders очень важен. сначала babelLoader, потом typescriptLoader
    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
