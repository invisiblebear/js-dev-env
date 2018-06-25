import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('GENERATING MINIFIED BUNDLE FOR PRODUCTION. THIS CAN TAKE SOME TIME...'))

webpack(webpackConfig).run((err, stats) =>{
	if (err) {  // so a fatal error occurred. stop here.
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

	if (jsonStats.hasWarnings){
		console.log(chalk.yellow('WEBPACK GENERATED THE FOLLOWING WARNINGS '));
		jsonStats.warnings.map(warning => console.log(chalk.yelllow(warning)));
	}
	console.log(`Webpack stats: ${stats}`);

	// if we got this far, the build succeeded
	console.log(chalk.green('YOUR APP HAS BEEN BUILT FOR PRODUCTION AND WRITTEN TO /dist!'));

	return 0
});
