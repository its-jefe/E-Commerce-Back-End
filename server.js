function handle(signal) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(`Received ${signal}`);
}
if (process) {
  process.on('SIGTERM', handle);
}

const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

/* 
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.
*/
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
    /*
After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.
*/