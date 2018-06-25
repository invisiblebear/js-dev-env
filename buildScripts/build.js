import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('GENERATING MINIFIED BUNDLE FOR PRODUCTION. THIS CAN TAKE SOME TIME...')) // eslint-disable-line no-console

webpack(webpackConfig).run((err, stats) =>{
	if (err) {  // so a fatal error occurred. stop here.
		console.log(chalk.red(err)); // eslint-disable-line no-console
		return 1;
	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error => console.log(chalk.red(error))); // eslint-disable-line no-console
	}

	if (jsonStats.hasWarnings){
		console.log(chalk.yellow('WEBPACK GENERATED THE FOLLOWING WARNINGS ')); // eslint-disable-line no-console
		jsonStats.warnings.map(warning => console.log(chalk.yelllow(warning))); // eslint-disable-line no-console
	}
	console.log(`Webpack stats: ${stats}`); // eslint-disable-line no-console

	// if we got this far, the build succeeded
	console.log(chalk.green('YOUR APP HAS BEEN BUILT FOR PRODUCTION AND WRITTEN TO /dist!')); // eslint-disable-line no-console

	return 0
});
