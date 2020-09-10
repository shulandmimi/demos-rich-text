import merge from 'webpack-merge';
import BaseConfig from './webpack.base.conf';


export default merge(BaseConfig, {
    mode: 'development',
});