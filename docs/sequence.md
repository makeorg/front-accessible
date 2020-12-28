## Operations Params

The Sequence is configured by setting parameters in ```sequenceConfig``` from JSON file.
```sequenceConfig``` contains configuration for :
- [introCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/IntroCard)
- [signUpCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/SignUpCard)
- [pushProposalCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/SignUpCard)
- [finalCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/FinalCard)


### introCard

```introCard``` is an ```object``` who contain the config of the card

``` json
  "introCard":  {
    "enabled": true, // Enable or disable the card
    "title": "lorem ipsum", // custom title of the intro card 
    "description": ["lorem ipsum isumlove1", "lorem ipsum isumlove2"], // custom Description of the intro card
    "partners": [
      {
        "name": "name of the partner",
        "imageUrl": "path of partner logo"
      } 
    ], // configuring operation's partners names & logos
    "extraLogo": "path of extra logo", // enabling extraLogo on introCard
  }
```


### signUpCard

```signUpCard``` is an ```object``` who conatin the config of the card

``` json
  "signUpCard": {
    "enabled": true, // Enable or disable the card
    "title": "lorem ipsum", // add a custom Title
    "nextCtaText": "loremp isum" // add a custom NextCTA text
  }
```


### pushProposalCard

```pushProposalCard``` is an ```object``` who contain the config of the card

``` json
  "pushProposalCard": {
    "enabled": true, // Enable or disable the card
    "extraLogo": "path of extra logo", // add an extraLogo on pushProposal
  }
```


### finalCard

```finalCard``` is an ```object``` who contain the config of the card

``` json
    "finalCard": {
      "enabled": true, // Enable or disable the card
      "title": "lorem ipsum", // custom finalCard Title
      "linkUrl": "https://link-of-the-final-button", // Link on the final button
      "withSharing": false, // disabling sharing on finalCard
      "share": [
        "Lorem ipsum 1",
        "Lorem ipsum 2"
      ], // Text behind the share
      "learnMoreTitle": "Lorem ipsum", // Title of the learn more section
      "learnMoreTextButton": "En savoir +" // Texte of the learn more button
    }
```

___ 

## Query Params

4 params can be configured by using query params in url

### introCard
```introCard``` can be :
- disable by setting a query param ```?introCard=false```
- enable by setting a query param ```?introCard=true```


### pushProposal
```pushProposal``` can be :
- disable by setting a query param ```?pushProposal=false```
- enable by setting a query param ```?pushProposal=true```


### signUpCard
```signUpCard``` can be :
- disable by setting a query param ```?signUpCard=false```
- enable by setting a query param ```?signUpCard=true```


### firstProposal
You can choose which ```firstProposal``` to display by adding ```ProposalId``` in a query param ```?firstProposal=ProposalId```