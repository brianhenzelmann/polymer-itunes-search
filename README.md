# Polymer iTunes Search API

This is an example Polymer application that integrates with the [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api). It uses [Express](https://expressjs.com/) and [Polymer](https://www.polymer-project.org) and is ready to be deployed to [Cloud Foundry](https://www.cloudfoundry.org/).

## Demo

A demo of this application can be found [here](https://polymer-itunes-search.cfapps.io/).

## Setup

### Prerequisites

This project requires that [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [bower](https://bower.io/) are setup globally. Additionally, the task runner [gulp](http://gulpjs.com/) should be installed to help with task automation.

#### Node.js
Please refer to [https://nodejs.org/en/](https://nodejs.org/en/) for instructions specific to your operating system.

Once Node.js is installed, its package manager npm is also installed. You can use this to install global or project specific dependencies.

#### bower & gulp
Use npm to globally install bower and gulp.

```
npm install -g bower gulp
```

### Download

To download all the source code needed to run this application, first clone this repository.

```
git clone https://github.com/brianhenzelmann/polymer-itunes-search.git && cd polymer-itunes-search
```

### Install Dependencies

Before running locally, you must download all server-side and client-side dependencies.

```
npm install && bower install --force-latest
```

## Run Locally

To run locally, simply use the default gulp task.

```
gulp
```

## Test

To test, use the npm test script. This currently just calls web-component-tester (wct).

```
npm test
```

The current code coverage can be found [here](https://polymer-itunes-search.cfapps.io/coverage/lcov-report/).

## Build

To make a build better optimized for production, run the gulp distribution task.

```
gulp dist
```

## Deploy

If you would like to deploy this to Cloud Foundry, use the below command to read from the `manifest.yml` file.

```
cf push
```

