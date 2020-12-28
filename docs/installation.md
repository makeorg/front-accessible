## Installation 

- Check Node js version in [.nvmrc](https://gitlab.com/makeorg/platform/front/-/blob/preproduction/.nvmrc) and prefer using NVM to manage your Node.js version
- Check Yarn version in [.yvmrc](https://gitlab.com/makeorg/platform/front/-/blob/preproduction/.yvmrc) and prefer using YVM to manage your Yarn version
- clone repo from gitlab (https://gitlab.com/makeorg/platform/front)
- add `127.0.0.1       local.makeorg.tech` to hosts file in `/etc/hosts`
- Run `yarn install` to install dependencies
- then run `yarn start:dev` to launch development server

- go to https://local.makeorg.tech:3000/
> You may arrive on a non secure website page, go through by clicking advanced and Accept the risk and go

Once the site loaded, you'll see there no dynamic content, it's because you don't get anything from API 
## Commands

- `start:dev`
- `build`
- `server:dev`
- `server:preprod`


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

