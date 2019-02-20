# Sequence configuration 

There is 2 ways to configure the Sequence :
- in [operationsParams json](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/server/staticData/operationsParams) of each consultation
- with query params in url

Query params prevail over operationsParams.

___ 

## Operations Params

The Sequence is configured by setting parameters in ```sequenceExtraSlidesConfig``` from JSON file.
```sequenceExtraSlidesConfig``` contains configuration for :
- [introCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/IntroCard)
- [signUpCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/SignUpCard)
- [pushProposal](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/SignUpCard)
- [finalCard](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/features/sequence/Card/FinalCard)


### introCard

```introCard``` can be a ```boolean```

``` json
  "introCard": false // disabling introCard
```
``` json
  "introCard": true // enbaling introCard with default configuration
```

or an ```object``` for custom configuration

``` json
  "introCard":  {
    "customTitle": true, // enabling customTitle defined in sequenceExtraSlidesWording
    "customDescription":  true, // enabling customDescription defined in sequenceExtraSlidesWording
    "partners": [ 
      {
        "name": "name of the partner",
        "imageUrl": "path of partner logo"
      } 
    ], // configuring operation's partners names & logos
    "inPartnershipWith": true, // enabling & displaying inPartnershipWith
    "extraLogo": "path of extra logo", // enabling extraLogo on introCard
  }
```


### signUpCard

```signUpCard``` can be a ```boolean```

``` json
  "signUpCard": false // disabling signUpCard
```
``` json
  "signUpCard": true // enbaling signUpCard with default configuration
```

or an ```object```

``` json
  "signUpCard": {
    "customTitle": true, // enabling customTitle defined in sequenceExtraSlidesWording
    "customNextCTA": true // enabling customNextCTA defined in sequenceExtraSlidesWording
  }
```


### pushProposal

```pushProposal``` can be a ```boolean```

``` json
  "pushProposal": false // disabling pushProposal
```
``` json
  "pushProposal": true // enbaling pushProposal with default configuration
```

or an ```object```

``` json
  "pushProposal": {
    "extraLogo": "path of extra logo", // enabling extraLogo on pushProposal
  }
```


### finalCard

```finalCard``` is an ```object```

``` json
    "finalCard": {
      "customTitle": false, // using default configuration for finalCard title
      "linkUrl": "link of the final button",
      "withSharing": false // disabling sharing on finalCard
    }
```
``` json
    "finalCard": {
      "customTitle": true, // enabling customTitle defined in sequenceExtraSlidesWording
      "linkUrl": "link of the final button",
      "withSharing": true // enabling sharing on finalCard
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