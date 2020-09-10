import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const cwd = process.cwd();

const resolve = (...arg: string[]) => path.join(cwd, ...arg);
const entry = resolve('src/index.ts');
const outputPath = resolve('./dist');
const htmlTemplate = resolve('public/index.html');

export default {
    entry: entry,
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
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
        },
        extensions: ['.ts', '.js', '.json'],
    },
} as Configuration;
