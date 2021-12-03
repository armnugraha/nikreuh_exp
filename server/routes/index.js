const rolesController = require('../controllers').roles;
const mountsController = require('../controllers').mounts;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // app.post('/api/todos', todosController.create);
  app.get('/mounts', mountsController.list);
  app.get('/mounts/:id', mountsController.retrieve);
  app.get('/mounts/setting_mount/:user_id', mountsController.settingMount);
  app.get('/mounts/mount/:id', mountsController.mountShow);
  app.get('/mounts/search/:text', mountsController.searchMount);

  app.get('/roles', rolesController.list);
  app.get('/roles/:roleId', rolesController.retrieve);
  // app.put('/api/todos/:todoId', todosController.update);
  // app.delete('/api/todos/:todoId', todosController.destroy);

  // app.post('/api/todos/:todoId/items', todoItemsController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  // app.delete(
  //   '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  // );

  // // For any other request method on todo items, we're going to return "Method Not Allowed"
  // app.all('/api/todos/:todoId/items', (req, res) =>
  //   res.status(405).send({
  //     message: 'Method Not Allowed',
  // }));
};