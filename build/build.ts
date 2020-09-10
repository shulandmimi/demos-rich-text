import webpack from 'webpack';
import ProdConfig from './webpack.prod.conf';


webpack(ProdConfig, (err, stat) => {
    if (err) throw err;
    process.stdout.write(
        `\n${stat.toJson({ all: false }).outputPath}\n${stat.toString({
            all: false,
            timings: true,
            modules: true,
            colors: true,
        })}\n\n`
    )
})