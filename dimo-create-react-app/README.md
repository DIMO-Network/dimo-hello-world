# DIMO Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to showcase how an application can login with DIMO by interacting with the [DIMO Auth Server](https://auth.dev.dimo.zone).

For more detailed information on how to interact with DIMO's API, please visit our [Developer Platform](https://docs.dimo.zone/developer-platform).

## Setup
Setup an `.env` file under the root directory according to your registered `client_id` and `redirect_uri`. If you need help understanding what these mean, please refer to our authentication section under [Developer Platform](https://docs.dimo.zone/developer-platform).

Your `.env` file should look something like this:

```
REACT_APP_CLIENT_ID=<client_id>
REACT_APP_REDIRECT_URI=<redirect_uri>
REACT_APP_AUTH_URL=https://auth.dev.dimo.zone
```

::: warning
You might also need to allow CORS on your browser by installing some browser extensions to help troubleshoot.
:::

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8002](http://localhost:8002) to view it in your browser.

The page will reload when you make changes.\

::: warning
You may also see any lint errors in the console. Due to this being the development mode in React, double invocation of the Auth token endpoint will happen, resulting in console errors. Understand that this is expected behavior in development mode to help you identify potential problems. No action is needed unless the double invocation is causing issues with your logic. To avoid seeing this, execute `npm run build` and `serve` in later steps to run a production build.
:::

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `serve -s build -l 8002`

Serves the production build on port 8002. We intentionally serve this on a specific port (not on a default port) because of the registered `redirect_uri` with DIMO. 

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
