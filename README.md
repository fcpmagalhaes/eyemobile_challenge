# Eyemobile Challenge
Challenge provided by Eyemobile company to a full stack job vacancy


This project contains the following modules:
 - api (Express.js)
 - client (ReactJS)


### ⚙ API Instalation

As a Express project, the installation is very simple. To run this project locally you just need to install the dependencies, run the migrations of database and start ✨

We recommend using npm as your package manager:

``` javascript
npm install
```

After install all packages we need run the migrations and seeds:

``` javascript
npx knex migrate:latest
npx knex seed:run
```

Create a .env file and set a secret string to be used at JWT auth:
``` javascript
SECRET_KEY=some_secret
```

At last, just is necessary run the application:

``` javascript
npm start
```

It will run the app in the development mode. Open [http://localhost:3333](http://localhost:33333) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### 🖥 Client Instalation

As a React project, the installation is very simple. To run this project locally you just need to install the dependencies and start to see the magic. ✨

 We recommend using yarn as your package manager. Just run the following lines:

``` javascript
yarn
yarn start
```

It will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.