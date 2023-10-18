# use-store-state

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]
[![Package Size][bundlephobia-img]][bundlephobia-url]

> A usestate-like react hook for interacting with the browser Local Storage API

## Install

```bash
npm install use-store-state
```

## Usage

```js
import { useStoreState } from 'use-store-state';

const [name, setName] = useStoreState('name', 'Bob');

console.log(name);
// 'Bob'
```

**OR** with typescript

```ts
import { useStoreState } from 'use-store-state';

const [isDarkMode, setIsDarkMode] = useStoreState<boolean>('darkMode', true);

// ERROR:
// Typescript should throw an error at this
setIsDarkMode('rink and rive');

// SUCCESS:
// This should pass
setIsDarkMode(false);
```

If no generic is passed, the type is inferred from the initial value, just the same way react `useState` works

```ts
import { useStoreState } from 'use-store-state';

const [isDarkMode, setIsDarkMode] = useStoreState('darkMode', true);

// ERROR:
// Typescript should also throw an error
setIsDarkMode('rink and rive');

// SUCCESS:
// This should pass
setIsDarkMode(false);
```

Also allows a callback to be passed as the parameter of `setState`.

```ts
import { useStoreState } from 'use-store-state';

const [isDarkMode, setIsDarkMode] = useStoreState('darkMode', true);

// Toggle dark mode on/off
setIsDarkMode(prev => !prev);
```

## API

### const [state, setState] = useStoreState(key, value?)

#### state

Type: Infered from the value passed in. If no value is passed, it defaults to `undefined`. Also defined by passing in a generic e.g `<boolean>` like in the typescript example above.

#### setState

Type:

```ts
React.Dispatch<React.SetStateAction<InferredType>>;
// Where `InferredType` is the type of the passed value or undefined

// OR

React.Dispatch<React.SetStateAction<DefinedType>>;
// Where `DefinedType` is the generic passed to `useStoreState` i.e boolean, string.
```

#### value

Type: `any`

[build-img]: https://github.com/emekaorji/use-store-state/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/emekaorji/use-store-state/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/use-store-state
[downloads-url]: https://www.npmtrends.com/use-store-state
[npm-img]: https://img.shields.io/npm/v/use-store-state
[npm-url]: https://www.npmjs.com/package/use-store-state
[issues-img]: https://img.shields.io/github/issues/emekaorji/use-store-state
[issues-url]: https://github.com/emekaorji/use-store-state/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[bundlephobia-img]: https://flat.badgen.net/bundlephobia/minzip/use-store-state
[bundlephobia-url]: https://bundlephobia.com/package/use-store-state
