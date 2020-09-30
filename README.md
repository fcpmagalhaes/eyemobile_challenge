# Eyemobile Challenge
Challenge provided by Eyemobile company to a full stack job vacancy


This project contains the following modules:
 - api (Node.js)
    A system that simulate the management of credit card transactions. Create users with diferent access level, implement JWT authentication and use ExpressJS.
 - client (ReactJS)
    A system that simulates the internal manager of a petshop. All the data are mocked for a while. Its possible, list and filter clients, show graphics with financial statements. Anti Design frameworks was used in some UI components, ChartJS to provide graphs, and Redux Sagas to management our state.


### ⚙ API Instalation

As a Express project, the installation is very simple. To run this project locally you just need to install the dependencies, run the migrations of database and start ✨

I recommend using npm as your package manager:

``` javascript
npm install
```

After install all packages we need run the migrations and seeds:

``` javascript
npx knex migrate:latest
npx knex seed:run
```

Create a .env file and set a secret string to be used at JWT auth:I
``` javascript
SECRET_KEY=some_secret
```

At last, just is necessary run the application:

``` javascript
npm start
```


It will run the app in the development mode. Open [http://localhost:3333](http://localhost:33333) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.


Using some API Testing Tools as Postman or Insomnia, its possible access the end-points. There you can create a user, init a session, and according with your user type, create transactions or manage the application. 

With this file 👉 "Desafio Eyemobile API.postman_collection.json" you can load all our collection quickly. After create a session, copy you token auth to the global variable token. It will allow you play with us 🎢

### 🖥 Client Instalation

As a React project, the installation is very simple. To run this project locally you just need to install the dependencies and start to see the magic. ✨

 We recommend using yarn as your package manager. Just run the following lines:

``` javascript
yarn
yarn start
```

It will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
