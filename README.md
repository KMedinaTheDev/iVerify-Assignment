# iVerify Full Stack Home Task

## Overview
Hello World LLC will publish a smartphone application that scans employees’ devices for known and unknown malware. You need to develop a 1-page dashboard for organization admins to display the results of the employees’ scans.

## Data

A single employee can have several devices that he needs to scan.

Employee fields:

1. Name

2. Email

3. Password

A single device may produce more than one scan per hour.

Device fields:

1. Model

2. Unique device identifier

The single scan includes:

1. OS Version: String — current iOS/Android version of the user.

2. App Version: String — the current app version on the device.

3. Secure: Bool — if any malware was found.

4. Threats: String? — details of found malware. Or null.

# Frontend Task
Develop a 1-page dashboard to display:

1. List of users.

2. List of devices for each user.

3. List of scans for each device.

User goals

1. Quickly find a corresponding user.

2. Quickly find a corresponding device.

3. Quickly find all scans for of device and users.

Connect the frontend part with the backend part via API.

# Backend Task: API for dashboard

## Develop an API to serve data for the front end to display.

Seed data with 100 users, 1000 devices, and 10 000 scans.

Secure communication between front and back.

## API for employee verification

Develop an API to verify employees’ passwords when they open the app. Seed employees and provide a few

examples of verification requests.

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test` _no test to run at this moment_

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
