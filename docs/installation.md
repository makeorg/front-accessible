## Installation 

- Check Node js version in [.nvmrc](https://gitlab.com/makeorg/platform/front/-/blob/preproduction/.nvmrc) and prefer using NVM to manage your Node.js version
- Check Yarn version in [.yvmrc](https://gitlab.com/makeorg/platform/front/-/blob/preproduction/.yvmrc) and prefer using YVM to manage your Yarn version
- clone repo from [gitlab](https://gitlab.com/makeorg/platform/front)
- add `127.0.0.1       local.makeorg.tech` to hosts file in `/etc/hosts`
- Run `yarn install` to install dependencies


## Development Mode
:guardsman: Access to make.org tech env are restricted through VPN. Check this with make.org tech team before launching these commands.
*  :ok_hand: Check `local.makeorg.tech` is setted in hosts
*  :construction_worker: Build dev version and start server with : `yarn dev`
*  :see_no_evil: visit `https://local.makeorg.tech`
*  :scream_cat: authorize unsecure certificate

:unlock: If you can't access to make.org tech env, the app can be run with the CI conf :
*  :construction_worker: Build app for CI and start servers with : `yarn ci`
*  :see_no_evil: visit `http://localhost:9009` :tada:

## Production Mode
Vars are differents between each env. These are handled with [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack)
*  :construction_worker: Build : `yarn build`
*  :rocket: Start server : `yarn server`

## Tests
*  To launch test `yarn test`
*  To enable watch mode: `yarn test --watch`
> then touch the o key to re-launch test only on files changed
*  To upadte snapshot mode: `yarn test --updateSnapshot`

## Linter
To launch linter `yarn lint`

## Detect duplications
To launch jscpd `yarn jscpd`

## Flow
To launch flow type checking `yarn flow`

## Documentation
*  `yarn documentation` is used to check if documentation is up to date
*   To update documentation use `yarn documentation --fix`

## Translation
*  `yarn translation` is used to check if tranlations are up to date
*   To update translations use `yarn translation --fix`

## Accessibility
*  `yarn accessibility` is used to check if accessibility documentation is up to date
*   To update accessibility documentation use `yarn accessibility --fix`

## Prepush 
Before push the following command will be executed `yarn prepush`
Following commands are runned on prepush :
  - `yarn documentation`
  - `yarn translation`
  - `yarn accesssibility`
  - `yarn lint`
  - `yarn flow`
  - `yarn test`
  - `yarn jscpd`

## SVG generation
To tranform SVG into React Components, we are using [svgr](https://github.com/gregberge/svgr)
Run it on your local env with this command : `svgr -d ./client/ui/Svg/elements ./client/ui/Svg/svgr --template ./client/ui/Svg/svgrTemplate.js && cp -r ./client/ui/Svg/svgr/* ./client/ui/Svg/source`

## CI 
### Cypress
To run all cypress test suite use `yarn ci:cypress`
To check a specific cypress test :
*  :construction_worker: Build app : `yarn build`
*   Run all test suite : `yarn ci cypress:run`
*   Open cypress console with : `yarn ci cypress:open`

### Lighthouse
To run all lighthouse test suite use `yarn lighthouse:run`
To check a specific lighthouse step :
*  :construction_worker: Build app : `yarn build`
*   Run lighthouse on chosen page with : 
    - `yarn ci lighthouse:home` for homepage
    - `yarn ci lighthouse:sequence` for sequence page
    - `yarn ci lighthouse:proposal` for proposal page
*   Or run lighthouse on all page with : 
    - `yarn ci lighthouse:all` 
