# Rate Repository App <br />

## Overview

This is an app I created as an assignment for the [Full Stack Open](https://fullstackopen.com/en/) course.

I developed the React Native frontend (backend was provided as course material) using [Expo](https://expo.dev/). 

From making the app I have gained a good overview of how to work within the React Native ecosystem and developed skills in -

- **Setting up a development environment for React Native apps**
- **The React Native component system**
- **Page routing in React Native**
- **Using Formik to build/ validate forms**
- **Implementing GraphQL communication/ user authentication in React Native**
- **Testing (Jest) and debugging (React Native Debugger)in React Native**
- **Styling React Native apps using Stylesheets, themes and external libraries (React Native Paper)**
- **Code structuring for larger scale app**
- **User device local storage**
- **Cursor based paginations and infinite scrollings**


## Features

- The app consist of six pages, a repository list page, single repository view, create review page, users reviews, user sign-up and sign-in page

- User can browse reviews, select a review to see more detailed information and also create/see list of his own reviews 

- Repository /reviews list has infinite scorlling implemented using Apollo Client cursor-based pagination

- The review and user sign up/signin forms are implemented using  When a cell is clicked on the user is shown more details about the individual posts and links to the post and the authors information page <br /><br />                


## Tech Used / Dependencies

- React Native App utilizing the [Expo](https://expo.dev/) framework

- Internal routing is facilated by [React Router Native](https://reactrouter.com/en/main)

- [Apollo Client](https://www.apollographql.com/apollo-client/) for GraphQL

- [Formik](https://formik.org/) form library

- [Yup](https://github.com/jquense/yup) schema builder for form validation

- [React Native Paper](https://reactnativepaper.com/) component library

- [jest-expo](https://www.npmjs.com/package/jest-expo) - [Jest](https://jestjs.io/) preset for automated unit testing in React Native

- [Testing-library](https://testing-library.com/) for React component testing

- [Eslint](https://eslint.org/) for linting

- [Prettier](https://prettier.io/) code formatting

- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage) for device local storage

- [date-fns](https://date-fns.org/) date utility library

- [dotenv](https://www.npmjs.com/package/dotenv) enviroment variable loader


## Install

```sh
npm install
```


## Usage

```sh
npm start
```


## Run tests

```sh
npm test
```

## Initializing backend

See [here](https://github.com/MartinL-no/full-stack-open-part10/tree/main/rate-repository-api)
