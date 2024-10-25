const jsonServer = require('json-server'); //importing json server library
const server = jsonServer.create(); //creating a server
const router = jsonServer.router('jobs.json'); //creating a router
const middlewares = jsonServer.defaults(); //creating a middleware

server.use(middlewares); //using middleware
server.use(router); //using router

const PORT = process.env.PORT || 3000; //setting port
server.listen(PORT, () => { //listening to port
  console.log(`JSON Server is running on port ${PORT}`); //printing message
});