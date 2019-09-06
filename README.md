# Front-end Developer task
---
## Project Overview

Front-end Developer task is take-home project as a part of job interview at GetResponse. The main purposes were to convert .psd file into React app, add responsive design including mobile and make it compatible with IE11, Internet Edge and all modern browsers. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run project?

### Run on local machine in development mode

1. Save folder on local machine and unzip.
```
2. Make sure you have installed [Node](https://nodejs.org/). and install all dependencies
```
$ npm install
```
3. Run application
```
$ npm start
```
Visit the site: `http://localhost:3000`
```
### Make build folder for production

2. Create `build` folder
```
$ npm run build
```
Please note all assets has been alredy optimized using Gulp Image package, so no need to run it again.
```
$ npm run build_project
```
3. Install [Serve](https://github.com/zeit/serve).
```
$ npm install -g serve
```
4. Serve your static site on the port 5000. 
```
$ serve -s build
```
Like many of serve’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

5. Open project on local server `localhost:5000`

## Dependencies

* [React & React DOM](https://reactjs.org/)
* [React Router DOM](https://github.com/ReactTraining/react-router)
* [Redux](https://redux.js.org/)
* [React Redux](https://github.com/reduxjs/react-redux)
* [React App Polyfill](https://github.com/facebook/create-react-app)
* [Node Sass](https://github.com/sass/node-sass)
* [Gulp](https://gulpjs.com/)
* [Gulp Image](https://github.com/1000ch/gulp-image)
* [Gulp Shell](https://github.com/sun-zheng-an/gulp-shell)
* [Material Design Icons](https://github.com/Templarian/MaterialDesign-JS)
