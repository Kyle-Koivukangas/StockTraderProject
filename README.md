# stock-trader-project

> Final Stock Trader Project using everything I've learned from the Vue JS complete course

## Build setup commands

``` sh
# initialize vue project structure
vue init webpack-simple stock-trader-project

# cd in to new project
cd stock-trader-project

#install Node modules
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Project installs
``` sh

# install babel stage 2 preset for spread modifier support
npm install --save-dev babel-preset-stage-2
#insert this in to .babelrc
{
  "presets": ["stage-2"]
}

# install dynamic import syntax, for dynamic import support
npm install --save-dev babel-plugin-syntax-dynamic-import
#insert this in to .babelrc
{
  "plugins": ["syntax-dynamic-import"]
}

#install Vue-Router for routing
npm install --save vue-router

#install Vuex for state management
npm install --save vuex

#install Axios for HTTP requests/REST api consumption
npm install --save axios vue-axios

```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
