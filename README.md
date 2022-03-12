# Write Selenium tests for Simple App

In this exercise, you are presented with simple Node.js Web Application written in Express 
Framework that you will be asked to test using Selenium.

Application can only do this:

- show a home page from which a user can go to a login screen
- on the login screen, user can enter his username and password and actually login to the app
- when logged in, user can see his profile and then he can logout

Your task will be to write Selenium tests for this simple app and you are asked to do this
using Javascript and Mocha test runner.

How to start:

- `npm install` - will download all dependencies
- `npm start` - will start the app, then you can access it on `http://localhost:3000`
- `npm test` (in different terminal) - will execute tests

Take your time to understand the structure of the application and then implement test cases in `test/basic-test.js` 
file. We provided you with the very first test case `for anonymous user -> home page shows login link`. Please,
implement its body and also come up with other test cases and implement them.

What we would like to see from you:

- define meaningful test cases using Mocha's BDD style (`describe` & `it` constructs)
- implement them using Selenium web driver
- use chai assertion library in your created tests.
- in your test try to implement best practices. (ex. POM, Page Factory)
- submit your code/tests as if you are requesting for a pull request review.

- create defect/bug report found in the app on a separate file, if any.

NOTE: all dependencies that you will need to complete this task are already in `package.json` (see `devDependencies` section).

