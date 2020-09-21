## Installation 
*   yarn install

## Development Mode

#### Start application with auto-reload
*   yarn start:dev
*   visit `https://local.makeorg.tech:3000`

#### Start server with api mock server
To be independant of the preproduction api you can launch the server and mock api server:
* yarn build
* yarn server:dev
* visit `http://localhost:9009`

#### Start server using preprod API
*   Add `local.makeorg.tech` to `hosts` file
> `127.0.0.1 local.makeorg.tech`
*   yarn build
*   yarn server:preprod
*   visit `https://local.makeorg.tech`
*   authorize unsecure certificate

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

## Detect duplications
To launch jscpd `yarn jscpd`

## Flow
To launch flow type checking `yarn flow`

## Prepush 
Before push the following command will be executed `yarn prepush`

### Production
*   Build command : `yarn build`
*   Start server : `env API_URL=https://mayapi.com yarn server`

