class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is x ${this.name}`;
  }
}

module.exports = {
  Person,
};
