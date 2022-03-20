# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Flows

This project is using https://randomuser.me/api/ as API request.

### Home Page

The home page will be shown first and will fetch data after the components is rendered.
The requested data will be shown in 10 results with a random users and will throw
an alert if there is an error occurred.

As for the pagination component, the previous data will not be randomized as long
as `seed` params doesn't change. Since the API data is randomized, next button
will always be available for the time being.

### Search 

The search component can be used by typing the input to gain the results of
matching username, name, or email. The search component will trigger by
itself after the user stop typing for 1 second.

Since the api doesn't provide searching parameter, the search component will
fetch the data first and will be filtered after.

### Filter

The filter component can be used by selecting the select element and the page
will fetch the data if there is a changed value occurred. Reset filter button can
be used if the current option value is not `All`. When the reset button is clicked
the option value will be change in to `All` and will fetch the data after.


## Additional Implementation

From my perspective to improving this web performance is to:
1. Use [Redux Saga](https://github.com/redux-saga/redux-saga) instead of [Redux Thunk](https://github.com/reduxjs/redux-thunk) to make redux middleware state flow easier to read
2. Use [React Table](https://github.com/TanStack/react-table) is a good choice to have a better performance on table components
3. Use [React Intl](https://formatjs.io/docs/react-intl/) for having a good internationalize structure
4. Implement a better structure for storing data and types

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
