# Learning Webpack

## Intro

1. `npm init -y`
2. `npm i webpack webpack-cli webpack-dev-server` - the bundler, the cli interface and a dev server
3. In the `scripts` block of `package.json` create:

```json
"scripts": {
  "start": "webpack serve",
  "watch": "webpack --watch",
  "build": "webpack"
}
```

`start` is the dev server
`watch` watches and recompiles files
`build` independantly builds the final product

4. Create a `src` folder and include a script `index.js`
5. Add some stuff to it, like:

```javascript
const me = {
  name: 'james',
  age: 40
};

console.log('me', me);
```

6. `npm run build` and check your newly created `dist` folder (which you should exclude in git) and you'll see a `main.js` has been created
7. (FOR DEMO ONLY) Add an index.html to your dist file and link up your main.js
8. Do `npm start` to get the dev server running and you'll see that it opens at the project root and you can click on `dist` and get the page BUT we want to change that, so we'll have to create a settings file...
9. Create a `webpack.config.js` file and add the following:
```javascript
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  }
}
```

10. The 'mode' by default is `production` but if you set it to `development it will show you where in the original src folder the logs come from.

11. If you make changes to the index.js then you'll see that reflected in the browser BUT that is not reflected in the `main.js`. To fix (tempararily) put `devtool:false,` in your config file (if this doesn't work, do `npm run build`). Look at the difference now in the files. They are edited and commented by webpack.

## Transpilation

1. Install `npm i -D babel-loader @babel/core @babel/preset-env`
2. The first one of those is called a 'loader' - it's used for loading non-javascript assets to be then handled by js.
3. The last one is a 'plugin'. It's used to add functionality to the process
4. In our config we need to set some 'traps' to get the code to run through the right plugins and loaders, so in your config js put:

```javascript
module: {
  rules: [ // this is an array for our different rules, js, .scss, etc.
    {
      test: /\.js$/, // test by regex
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
```
5. to avoid clutter let's create a `babel.config.js` file and add it to

```javascript
module.exports = {
  presets: ['@babel/preset-env'],
}
```

6. If you now compile you'll see webpack begin to use babel to add necessary fallback functionality
7. Some things, like private class fields are a problem because they're not enabled by default with babel. (See https://babeljs.io/docs/en/presets/) So in your `babel.config` add:

``javascript
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
```

and install it `npm i -D @babel/plugin-proposal-class-properties`

## Sourcemap

Change `devtool: false` to `devtool: 'source-map'` to get sourcemaps. Sourcemaps are produced in development by default, not production.

Let's add 2 parts to allow an environment variable to be passed between the 2. In your `webpack.config.js` let's add:

```javascript
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production
}

module.exports = {
  mode: mode
  // etc....
}
```

then we can update the scripts block:

{
  "build": "NODE_ENV=production webpack",
  "build:dev": "webpack"
}

## Styles

1. If you add a `styles` folder and a `index.css` file inside it and import it in `index.js` (`import "./styles/index.css";`) it'll blow up because 'no loader', so we need to change that. Install: `npm i -D css-loader mini-css-extract-plugin` (`style-loader` injects into your but `mini-css-extract-plugin` creates CSS files)

```javascript
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
```
add this to a `plugins: [new MiniCSSExtractPlugin()]`

then in the rules array, add:

```javascript
      {
        test: /\.css$/,
        use: [{
          loader: MiniCSSExtractPlugin.loader,
          options: {
            publicPath: '' // avoids a gotcha with images later
          }
        },
        'css-loader']
      },
```

Do `npm run build` to see the output! :)

## Images

New rule:

```javascript
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset'
}
```

3. You should now be able to include and buld with images. If you want to change the path use output in your config, like so: `

```javascript
output: {
  assetModuleFilename: "images/[name][ext][query]" // Cache busting can be done like: "images/[name].[hash][ext][query]" but you need to reconcile, which is easy in react but not static html
}
```

Image optimisation can then be done like: <https://webpack.js.org/plugins/image-minimizer-webpack-plugin/> (see webpack folder)


## Cleaning and moving the html file

1. Create a clean task that deletes the dist folder 

```javascript
"clean": "rm -rf ./dist"
```

2. Install the `html-webpack-plugin` (`npm i -D html-webpack-plugin`)
3. Import it and add it to your plugins in the config (`const HtmlWebpackPlugin = require('html-webpack-plugin');`) and add to the array `plugins: [new MiniCSSExtractPlugin(), new HtmlWebpackPlugin({
  template: './src/index.html'
})],`






