const Greeter = require('./greeter');

exports.function = (req, res) => {
  const g = new Greeter();

  // Can't access private fields
  // greet.#name = 'NewName';

  res.send(g.sayHello());
};

