const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

/*
Create the code needed in server.js to sync the 
Sequelize models to the MySQL database on server start.
*/

// sync sequelize models to the database, 
sequelize.sync().then(() => {
  // then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

/*
After creating the models and routes, run npm run seed
to seed data to your database so that you can test your routes.
*/