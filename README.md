# 2048 Game

Implementation of the 2048 Game. For Specifications see the [2048.pdf](2048.pdf) file.

The app is using ReactJS and Ant Design, rather as a "lite" tehnical showcase as a real requirement.

## Running the App

To run the application locally use the following command:

`npm run dev`

Or to run the production build

`npm run build`

followed by

`npm run preview`

## App features

When the app is started it will trigger a small animation as an _intro screen_.
To start the game, the __Start Game__ button can be pressed.

The board size can be adjusted by selecting an option from the __Board size__ dropdown.

### Easy mode

An alternative, __Easy Mode__ can be turned on. In this case the game will not be lost when there are no more 
squares with the value 0 available, but will continue until any movement is possible.

## Available scripts from package.json

- `npm run dev`: Start the development server using vite.
- `npm run build`: Build the application into the _dist_ folder.
- `npm run preview`: Run the application preview server after build.
- `npm run lint`: Run ESLint on the project
- `npm run test`: Run the unit tests with _vitest_.
- `npm run coverage`: Run the unit tests and generate coverage.

## Technical description

This app was created with Vite using the `npm create vite@latest` command, choosing the ReactJS with TypeScript 
template.

The app is using `npm` as package manager.

The following tools are set up for code quality:
 - ESLint
 - Prettier
 - TypeScript
 - Vitest
