import { Configuration, Loader } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function getCssLoaders() {
    const mode = (process.env.NODE_ENV as Configuration['mode']) || 'development';
    const loaders: Loader[] = [];
    loaders.push(mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader');
    return loaders;
}
