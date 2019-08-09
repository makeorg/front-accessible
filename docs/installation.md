## Installation 
*   yarn install

## Development Mode

#### Start server
*   yarn build
*   yarn server:dev
*   visit `http://localhost:9009`


#### Start application with auto-reload
*   yarn install
*   yarn start:dev
*   visit `http://localhost:3000`

#### Start api mock server
To be independant of the preproduction api you can launch the mock api server:
`yarn api-mock:start`

Then you can lauch the dev server using this local api
`yarn server:dev`


## Style Guide
*   To start development Server : `npx styleguidist server`
*   visit `http://localhost:6060`
*   Build command : `npx styleguidist build`

## Tests
- To launch test `yarn test:unit:all`

- Watch mode: `yarn test:unit:all:watch`
> then touch the o key to re-launch test only on files changed

## Linter
To launch linter `yarn lint`

## Flow
To launch flow type checking `yarn flow`

## Prepush 
Before push the following command will be executed `yarn prepush`

### Production
*   Build command : `yarn build`
*   Start server : `env API_URL=https://api.preprod.makeorg.tech yarn server`

