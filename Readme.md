# Make.org React Front End
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/0d6905329e874f4bbb922aa57f4725ad)](https://www.codacy.com/app/makeorg/front-accessible?utm_source=gitlab.com&utm_medium=referral&utm_content=makeorg/platform/front-accessible&utm_campaign=Badge_Coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0d6905329e874f4bbb922aa57f4725ad)](https://www.codacy.com/app/makeorg/front-accessible?utm_source=gitlab.com&amp;utm_medium=referral&amp;utm_content=makeorg/platform/front-accessible&amp;utm_campaign=Badge_Grade)
## Features
*   React 16
*   Webpack 4
*   Styled Components 4
*   Babel 7
*   Styleguidist 7
*   Hot Module Replacement

## Installation:
### Development Mode
#### Start application with auto-reload
*   yarn install
*   yarn start:dev
*   visit `http://localhost:3000`

#### Start server
*   yarn build
*   yarn server:dev
*   visit `http://localhost:9009`

### Production
*   Build command : `yarn build`
*   Start server : `env API_URL=https://api.preprod.makeorg.tech yarn server`

## Tests
To launch test `yarn test:unit` or `npm run test:unit`

## Linter
To launch linter `yarn lint` or `npm run lint`

## Style Guide
*   To start development Server : `npx styleguidist server`
*   visit `http://localhost:6060`
*   Build command : `yarn styleguidist build`
