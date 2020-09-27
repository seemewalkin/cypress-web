# Web-app automation with Cypress

## Overview
Demo-cypress project with the automated test suites for creation and updating of the computers on sample application http://computer-database.herokuapp.com/.


## Installation
- Install <a href="http://nodejs.org/">Node</a> (v10.x.x or later).
- Install <a href ="https://www.npmjs.com/">npm</a> 

```npm i``` to install the project dependencies
```npm run WithReport``` - to run all the test suites from integration/pages/specs folder and produce the output.html report
```npm run cy:run``` - to run all the test suites from integration/pages/specs folder. Once you execute the command, new instance of the Chrome browser should be opened and all the run of the test suites for the website: http://computer-database.herokuapp.com/  should be visible in Chrome-browser instance. 

## Project dependencies 
- <a href="https://www.cypress.io/">Cypress</a> - a javascript end-to-end framework for testing 
- <a href="https://www.npmjs.com/package/mochawesome">Mochawesome</a> - a custom reporter for use with espresso
- <a href="https://www.npmjs.com/package/npm-run-all">npm-run-all</a> - a CLI tool to run multiple scripts from package.json
- <a href="https://www.npmjs.com/package/mochawesome-merge">Mochawesome-merge</a> - merges json reports from various specs into one

## Why cypress?
- I came from the idea, that I want to have a tool, which exists in the app, which is written on JS and which allows to write an end-to-end tests. And my idea was a collaboration along QA and Frontend-Engineers. I chose Cypress. Cypress has a native access to every element within the app and it allows a lot of opportunities to frontenders and QA engineers to write various types of tests and increase the code coverage, cover the regression and end-to-end scenarios. 

Pros:
- Opportunity to introduce test automation for developers and collaborate with QA on overall coverage. TDD approach with complete end-to-end testing!
- Easy debugging and writing of tests, since the cypress runs within the browser live and you can adjust tests on fly (saves time for debugging and writing tests). It runs within the browser as oppose to Selenium Webdriver.
- Built-in-server mocking: Both QAs and Devs can use stubs, mocks and change the response codes on fly within tests. It allows to cover more edge cases and functions. 
- No need with explicit or implicit waits wrappers, since Cypress waits automatically for assertions
- Easy set-up both locally and on CI.
- It's faster than Selenium-Webdriver sollutions 

Cons:
- Cypress is Javascript only, while Selenium-based framework allows you to write tests on all of the popular languages (java, ruby, python, C#)
- Limited support for iFrames (didn't test it yet, but could be essential)

## Patterns, issues and tools
- I've used a page object pattern, which allows us to encapsulate the logic and elements from the tests and which allows us to easily maintain the tests. cypress/integration/pages/creationPage.js and cypress/integration/pages/listView.js classes contain the necessary elements and functions of corresponding pages and are being used in test files. In case if we would need to add the new tests, we would need to create a new interactions with elements inside the page files. 

When I added the reporting I realized, that cypress doesn't allow you to natively create a report for a group of tests from different specs, so I needed to install a dependency (mochawesome-merge tool which combines the json's from different test suites and gives an html on the output). 
