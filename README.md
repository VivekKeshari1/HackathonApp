# Getting Started with Create React App

Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Task`

Assignment for a front-end development internship

Objective - Create a submissions app where one can submit their hackathon submissions & see the list.

Context : Imagine you are working for an Edtech company and you are asked to create a simple application that will allow to submit a hackathon submissions. The hackathon consists of a problem statement which can be accessed by participants to solve and make a submission. Here let’s imagine hackthons feature is already built & you are asked to build the submissions feature where learners can submit their hackthon solutions.

Application overview -
-> Learners should be able to create, edit, and delete their submission.
-> Every submission form should have following fields:
-> Title
-> Summary
-> Description
-> Cover Image
-> Hackthon name
-> Hackthon start date
-> Hackthon end date
-> Github repository link
-> Other links(optional)
-> Learners should be able to see the list of submissions.
-> Where learner can search the submission using title
-> Learners should be able to sort the submissions based on hackathon start date(oldest, newest)

There should be 2 tabs.
-> All submissions
-> Favourite submissions

When clicked on submission it should take them to page where learner can see all the data related to submission.
On this page, learner should be able to edit, delete the submission & by clicking on the start icon they can make that submission as their favorite.
And all the favourite submissions should be visible in favourite tab.
You don’t need to build backend for this. You can use the local storage as db where you can store the submissions data.
