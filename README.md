![nodeLogo](https://camo.githubusercontent.com/b6ba9075a54c192efc59bba53c92e7c23ec8cfe8/68747470733a2f2f63646e2e7261776769742e636f6d2f67696c626172626172612f6c6f676f732f653762316463323636366333646162653663313237366162643061373637623665626436616634332f6c6f676f732f6e6f64656a732d69636f6e2e737667)
![mongoDBLogo](https://citywebconsultants.co.uk/sites/default/files/inline-images/mongo-medium.png)
# Node-authentication-system
A authentication system build with node and MongoDB.

## Getting Started
This project is made using node.js library, so first of all you need to install node from its official [source](https://nodejs.org/)
In this project nodemon and webpack are used for live reloading on any changes.
### Technologies used:
* nodejs - The project is based on
* webpack - As Module Bundler
* passportjs - For Authentication process
* pug - For Templating
* scss - For all the Styling part
* mongoDB - Used as Database

### How to install

#### First:
install [mongoDB](https://www.mongodb.com/) and follow steps to setup Database on your system.
  1. Create a database named authSys
  1. Create Collection named user with unique index on username
And your database is all set to Rock.

#### Second:
To get your app running
#### Run commands:
To install all dependencies:
```javascript
npm install
```
To run the app:
```javascript
nodemon
```
Now you can go to localhost:3000 in your browser and whole app will be working.

#### Third:
To add your own flavour to this app, you need to know basics of all technologies mentioned above.
In another Cmd run:
```javascript
webpack -p
```
### Author:
-crazyD (Dhaval Nagar)
