# Custom React Scripts
This package allows you to create a bootastrapped React project. It is forked from Create React App with a few important additions. 

You can find the original docs here:
- [Create React App](https://github.com/facebook/create-react-app) - General info about CRA
- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Changelog
Our changes are independently versioned. This allows us to track our changes and the main CRA project.

We will pull in CRA changes on a regular basis. The keep breaking changes to a minimum.  
### v1.0.0
+ added default dependencies (see default dependencies section)
+ added pre-push config
+ added new folder structure
+ added example of components and test structure
+ added example of Ducks Redux format
+ added react router and example
+ added GlobalErrorBoundary component
+ added setupTests.js to enable enzyme
+ added semistandard formatter
+ added .env files
+ added .npmrc file to save-exact

## New Project via the CLI
```
npx create-react-app <projectName> --use-npm --scripts-version <custom-react-scripts>
```

## Additional Default packages
CRA comes bundled with lots of it's own default dependencies. You can see them in the *-react-scripts npm package. 

We add a few more to try and unify the way we done things. A rational for each is below.
 
+ [apisauce](https://www.npmjs.com/package/js-cookie) - Built ontop of axios, it is included to standardise any HTTP calls. Eventually there will be a standard API connector built from this, so any microservice calls written should be modular and exportable. 
+ [js-cookie](https://www.npmjs.com/package/js-cookie) - a nice way to handle cookies 
+ [react-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM binding for react-router
+ [react-redux](https://www.npmjs.com/package/react-redux) - React state management
+ [redux](https://www.npmjs.com/package/redux) - State management used in react-redux
+ [redux-thunk](https://www.npmjs.com/package/redux-thunk) - Side effects library for Redux
+ [enzyme](https://www.npmjs.com/package/enzyme) - Support for better Jest testing
+ [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16) - React 16 bindings for Enzyme
+ [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json) - Better snapshot testing with Enzyme
