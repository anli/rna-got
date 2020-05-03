# React Native Game of Throne App

[![Maintainability](https://api.codeclimate.com/v1/badges/7977c4a0d7ae8b8b37b2/maintainability)](https://codeclimate.com/github/anli/rna-got/maintainability) [![Build Status](https://app.bitrise.io/app/1542344afc29b1fa/status.svg?token=KSPTvZEsaloEiwwCP5ywWg&branch=develop)](https://app.bitrise.io/app/1542344afc29b1fa)

## Run the App

Install packages

```
npm ci
```

Run on Android

```
npm run android
```

Run on iOS

```
npx pod-install ios
npm run ios
```

Run e2e tests

> Only for android, you must have AVD Named "Nexus_5X_API_28"

```
npm run e2e   // debug mode
npm run ci:e2e   // release mode
```

Run unit tests

```
npm run test
```

## Tech stack

### Redux

- redux-observable + rxjs
- reduxjs/toolkit

### UI

- rn-placeholder
- styled-components
- react-native-paper
- react-native-vector-icons
- react-native-fast-image

### Testing, Linting, Formating, Code Quality

- detox
- jest
- eslint
- typescript
- codeclimate
- prettier
- gherkin
- react-native-testing-library

### Utilities

- react-navigation
- standard-changelog
- commitizen
- react-native-dotenv
- babel-plugin-module-resolver

## Code Architeture

Key folder structures and explainations

```
__mocks__                 // mocks for unit/integrated test
e2e                       // end to end detox tests
test                      // shared test utilities
.env                      // environment variables
App.tsx                   // entry of App
src
├──character              // domain seperated files for character
│  ├──store               // character's redux files
│  ├──index.ts
│  └──service.ts          // character data providers, utilities
├──components             // shared components used throughout app
├──screens
│  ├──character-detail    // character-detail screen files
│  ├──home
│  │  ├──components       // ui components used only in home screen
│  │  ├──hooks            // container component for home screen
│  │  ├──home.feature     // gherkin for home screen tests
│  │  ├──home.test.tsx    // home screen tests
│  │  ├──home.tsx         // presentation component for home screen
│  │  └──index.ts
│  └──index.ts
└──store                  // app's redux files
...
```

## Code Practices

### Example Steps

- Create branch `git checkout -b feature/my-feature`.
- Create e2e test for feature at `e2e/app.test.ts`.
- Run e2e test with `npm run e2e`. Test should fail.
- Create integrated/unit test for feature at `my-feature.test.tsx`.
- Run unit test with `npm run test -- --watchAll`. Test should fail.
- Write code at `my-feature.tsx` until unit test pass.
- Verify e2e test pass.
- Verify CI test on local with `ci:test`.
- Push code to repo. Create PR. Verify PR Checks for Bitrise and Codeclimate Passed.
- Fix any valid Codeclimate issues. Run CI test on local. Push commit to repo.

### Guides

Testing

- 100% unit/integrated test coverage where possible. Mock libraries (`__mocks__/rxjs/ajax.ts`) to keep testing focused on controllable components.
- BDD for tests, use Gherkin to enforce this. Keep tests focused on user behavior/interaction. Allows common language between UAT Users and Developer.
- Detox (less flakiness) testing for live environment (Actual API Server).
- No issues from Codeclimate. Use its result to perform refactoring.
- All files are in typescript with type checking (inferred or explict). Significantly reduce error while developing and elimates unit test for type checking needed.

React Components

- Functional component. Exception Pure Component for performance (`src/screens/home/components/item.tsx`).
- React hooks rather the higher order components or render props for better readability and reusability. Also gives us option to spy on hooks for testing.
- Presentation Component (`src/screens/home/home.ts`) with Container Component (`src/screens/home/hooks/use-home.ts`) approach.
- Placeholders where loading time for data is expected (`src/screens/home/home.ts`, `src/screens/character-detail/character-detail.ts`).
- Load images with react-native-fast-image. It has considerable performance improvement and useful utility over React Native Image.
- Use styled-components, remove need to assign style, easier to read and reason, easier to implement variable props (`Image` in `src/screens/character-detail/components/detail-image.tsx`).

Maintainability

- Keep your commits message and changelog meaningful with commitizen, standard-changelog.
- Keep environment variables seperated (`.env`) with `react-native-dotenv`.
- Use barreling file structure for better testing experience, and discovery. (`src/screen/index.ts`, `src/character/index.ts`).
- Use path alias with `babel-plugin-module-resolver`. Keep imports easier to read and reason.
- Keep shared components at `src/components` folder, private components should be kept at the parent folder `src/screens/home/components`.
- Use domain folder seperation for Charactor's specific files (`src/character/store`) and App's specific files (`src/store`).
- Functional Programming over OOP. Easier to reason and read behavior of function. Exception: usage of class for better discovery of domain related functions (`CharacterService` in `src/character/service.ts`).

State Management

- Use reduxjs/toolkit, an opinionated react-redux package, but simplify implementation which improve overall readability.
- Handle async actions with redux-observable as observables. Useful observable operators can be used with rxjs and write in functional programing with `pipe` (`src/character/store/epic.ts`). Epics middleware allow one to write extendable behavior of redux.
