# 2048 Game

For detailed specifications, please refer to the [2048.pdf](2048.pdf) file.

This application is built using ReactJS and Ant Design, serving as a streamlined technical showcase.

## Running the App

To run the application locally use the following command:

`npm run dev`

Or to run the production build

`npm run build`

followed by

`npm run preview`

## App features

When the app is started it will trigger a small animation as an `intro screen`.
To start the game, the `Start!` button can be pressed.

### Easy mode

An alternative, `Easy Mode` can be turned on. In this case the game will not be lost when there are no more
squares with the value 0 available, but will continue until any movement is possible.

### Board size adjustment

The board size can be adjusted by selecting an option from the `Board size` dropdown.

### Obstacles

A number of obstacles can be added to the game to increase difficulty.

## Available scripts from package.json

- `npm run dev`: Start the development server using vite.
- `npm run build`: Build the application into the `dist` folder.
- `npm run preview`: Run the application preview server after build.
- `npm run lint`: Run ESLint on the project
- `npm run test`: Run the unit tests.
- `npm run coverage`: Run the unit tests and generate coverage report.

## Technical description

This app was created with Vite using the `npm create vite@latest` command, choosing the ReactJS with TypeScript template.

The app is using `npm` as package manager.

The following tools are set up for code and functional quality:

 - TypeScript
 - ESLint
 - Prettier
 - Vitest
 - React Testing Library

The project uses `strict-type-checked` eslint TypeScript rules. It also has a high unit test coverage. The main business logic is decoupled from the view layer, making it reusable.

## Deployment

The app has a `Dockerfile` included. If in a `.env` file the `GAME_REGISTRY` variable is set to a valid registry URL, the following command can be used to build a container and push it to the registry:

`./deploy.sh`

## License

This project is open source and available under the MIT License.
Copyright 2024 Attila Kerekes