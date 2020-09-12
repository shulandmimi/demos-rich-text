import webpack from 'webpack';
import merge from 'webpack-merge';
import BaseConfig from './webpack.base.conf';

export default merge(BaseConfig, {
    mode: 'development',
    entry: [BaseConfig.entry, 'webpack-hot-middleware/client?noInfo=true&reload=true'] as string[],
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'eval-source-map',
});
