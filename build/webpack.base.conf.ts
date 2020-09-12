import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { getCssLoaders } from './utils';

const cwd = process.cwd();

const resolve = (...arg: string[]) => path.join(cwd, ...arg);
const entry = resolve('src/index.ts');
const outputPath = resolve('./dist');
const htmlTemplate = resolve('public/index.html');

export default {
    entry,
    output: {
        path: outputPath,
        filename: '[name].js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: ['ts-loader'],
            },
            {
                test: /\.css/,
                use: getCssLoaders(),
            },
        ],
    },
    stats: {
        all: false,
        colors: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: htmlTemplate,
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[hash:10].css',
        }),
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
        },
        extensions: ['.ts', '.js', '.json'],
    },
} as Configuration;
