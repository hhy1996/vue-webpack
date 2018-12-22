var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  
        entry: ['babel-polyfill','./src/main.js'], // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
        devtool: '#eval-source-map',
        output: {
            path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
            publicPath: './dist/', // 通过devServer访问路径
            filename: 'build.js' ,// 打包后的文件名
            chunkFilename: '[name].chunk.js',              // 根据 chunk name 生成对应的文件
        },
        devServer: {
            historyApiFallback: true,
            overlay: true
        },
        resolve: {
            alias:{
                'vue$':'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.sass$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader?indentedSyntax'
                    ],
                },
                {
                    test:/\.js$/,
                    loader:'babel-loader',
                    options: {
                        "presets": [['es2015', {modules: false}]],
                        "plugins": ["syntax-dynamic-import"]
                    },
                    exclude:/node_modules/
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                      {
                        loader: 'url-loader',
                        options: {
                          limit: 8192
                        }
                      }
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'scss': [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader'
                            ],
                            'sass': [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader?indentedSyntax'
                            ]
                        }
                    }
                }
            ]
        },
        plugins:[
            new VueLoaderPlugin()
        ]
    };