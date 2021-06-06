# Memes voting application

## Table of contents

- [General info](#general-info)
- [Requirements](#requirements)
- [Setup](#setup)
- [Contact](#contact)

## General info

This project is a meme voting application. There are two memes categories:

- hot (number of votes calculated by a formula (upvotes - downvotes > 5)
- regular (number of votes calculated by a formula (upvotes - downvotes <= 5)

Memes with proper number of votes are automatically moved between the categories.

Additionaly, meme can be marked as a favourite by clicking the star button.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Requirements

- Node >= 14
- npm >= 6

## Setup

Clone this repository

```
$ git clone https://github.com/anitakniaziew/memes
```

Available Scripts

In the project directory, you can run:

```
$ npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
$ npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contact

Created by [@anitakowalska](https://www.kowalska.dev/)
