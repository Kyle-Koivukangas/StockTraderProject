# stock-trader-project

> Final Stock Trader Project using everything I've learned from the Vue JS complete course

## Build setup commands

``` bash
# initialize vue project structure
vue init webpack-simple stock-trader-project

# cd in to new project, install node modules
cd stock-trader-project
npm install

# install babel stage 2 preset for spread modifier support
npm install --save-dev babel-preset-stage-2
{
  "presets": ["stage-2"]
}

# install dynamic import syntax, for dynamic import support
npm install --save-dev babel-plugin-syntax-dynamic-import
{
  "plugins": ["syntax-dynamic-import"]
}

# serve with hot reload at localhost:8080
npm run dev
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
