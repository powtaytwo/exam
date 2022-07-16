This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses [Minimal Free](https://minimal-kit-react.vercel.app/dashboard/app).

# Setup

Install required javascript packages

Yarn is the recommended package manager.

```
npm install --global yarn
```

or

```
brew install yarn
```

```
yarn install
```

````
If you encounter an error, check current Node version and install current Node LTS version instead if different. You will then need to unlink current version and relink new version.
eg for Node 10 (with Homebrew)
```console
brew unlink Node
brew install Node@10
brew link Node@10 --force
brew node --version (to check it is linked)
````

## VSCode Development

- Install and enable the **ESLint** extension.
- Install and enable the **Prettier** extension but don't use **Prettier** as defaultFormatter.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
