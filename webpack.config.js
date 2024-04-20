const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	mode: "production",

	entry: path.join(__dirname, "src", "index.js"),

	output: {
		path: path.resolve(__dirname, "build-view"),
	},

	module: {
		rules: [
			{
				test: /\.?(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},

			{
				test: /\.(css|scss)$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Post CSS
					"postcss-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),

		new Dotenv({
			systemvars: true,
			path: "./.env",
		}),
	],

	resolve: {
		extensions: ["*", ".js", ".jsx"],
		resolve: {
			modules: ["./node_modules"],
		},
	},

	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
				},
			},
		},
	},
};
