class Greeter {
  #name = 'Functions Framework';
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  sayHello() {
    return `Hello, ${this.#name}`;
  }
}

module.exports = Greeter;
