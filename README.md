# Roomba

Please build a much simplified Roomba.  A roomba is a vacuuming robot but we will be controlling it.


Display a 10x10 grid that represents a room. Implement the grid in markup, not css, and ensure that each cell has a data-testid attribute that is of the form `${x}-${y}`. Display roomba in one of the grid cells and ensure it contains the text `X`.  The starting position for Roomba is in position x:1, y:1.

The roomba's direction should be shown simply as a string with `up`, `left`, `down`, or `right`.  The starting direction for the Roomba is `up`.

Implement 2 buttons to control the roomba.

1. move: move roomba forward 1 space. If the roomba is at a wall and tries to go forward into the wall, then turn clockwise 90 degrees.

2. rotate: clockwise 90 degrees

Ensure that the buttons have the `move` and `rotate` text

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
