import express from 'express';
import DevMid from 'webpack-dev-middleware';
import HotMid from 'webpack-hot-middleware';
import webpack from 'webpack';
import DevConfig from './webpack.dev.conf';

const app = express();

const compiler = webpack(DevConfig);

app.use(
    HotMid(compiler, {
        log: (arg: string) => {
            console.log(arg);
        },
    })
);

app.use(
    DevMid(compiler, {
        stats: {
            ...(typeof DevConfig.stats === 'object' ? DevConfig.stats : {}),
        },
        logTime: true,
    })
);

app.listen(12306, () => {
    console.log('http://127.0.0.1:12306');
});
