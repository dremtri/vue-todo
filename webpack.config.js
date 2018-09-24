const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')     //Extract text from a bundle, or bundles, into a separate file.
const isDev = process.env.NODE_ENV === 'development'

const baseConfig = {
    context: path.resolve(__dirname, '.'),
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
	resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: '[name].[ext]'
						}
					}
				]
			},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'index.html',
            inject: true    //将资源文件放到body中
        })
    ]
}

if(isDev) {
    baseConfig.devtool = 'cheap-module-eval-source-map';
    baseConfig.devServer = {
        port: 9999,
        host: '0.0.0.0',
        overlay: {
            errors: true    //当webpack编译错误时将错误信息展示在浏览器中
        },
        hot: true
        // open: true  //是否自动打开url
    };
    baseConfig.module.rules.push({
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
    });
    baseConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
} else {
    baseConfig.module.rules.push({
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        })
    });
    baseConfig.plugins.push(
        new ExtractTextWebpackPlugin('styles.css')
    );
    baseConfig.output.filename = '[name].js'
}

module.exports = baseConfig