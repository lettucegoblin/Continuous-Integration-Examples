# Testing Multiple Ways of Doing CI on GitHub
This repository contains an example project that demonstrates how to test multiple ways of doing Continuous Integration (CI) on GitHub. The project has a simple library that adds two numbers together, and includes tests written using different testing frameworks. The project also includes a GitHub Actions workflow that runs the tests on every push to the repository. The workflow is configured to run the tests using all three frameworks. The workflow is defined in the file `.github/workflows/ci.yml`.

# Testing frameworks
The project includes tests written using the following frameworks:
* [index.test.js](/__tests__/ava/index.test.js) [AVA docs](https://github.com/avajs/ava)
* [index.test.js](/__tests__/jasmine/index.test.js) [Jasmine docs](https://jasmine.github.io/)
* [index.test.js](/__tests__/jest/index.test.js) [Jest docs](https://jestjs.io/)
* [index.test.js](/__tests__/mocha/index.test.js) [Mocha docs](https://mochajs.org/)
* [index.test.js](/__tests__/node/index.test.js) [Node.js assert docs](https://nodejs.org/api/assert.html)
* [index.test.js](/__tests__/tape/index.test.js) [Tape docs](https://testanything.org/)

# Running the Tests Locally
To run the tests locally, you must have Node.js installed. Then, run the following commands:
```
npm install
npm test
```

# Assert Libraries Examples
There are a number of assert libraries available for Node.js. This project uses the bare minimum of each library to demonstrate how to use them.
Here's an example file of different assertion libraries:
[assert-examples.js](assert-examples.js)

# Running the Tests on GitHub
To run the tests on GitHub, you must have a GitHub account. Then, fork this repository and push a change to the repository. This will trigger the GitHub Actions workflow, which will run the tests and report the results in the Actions tab of your forked repository.

# Github Workflow Status Badge
[Github docs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)

![This Repos Badge](https://github.com/lettucegoblin/Continuous-Integration-Examples/actions/workflows/ci.yml/badge.svg)
```
![This Repos Badge](https://github.com/lettucegoblin/Continuous-Integration-Examples/actions/workflows/ci.yml/badge.svg)
```