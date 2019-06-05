export default manager => {
  manager.addDocument("en", "goodbye for now", "greetings.bye");
  manager.addDocument("en", "bye bye take care", "greetings.bye");
  manager.addDocument("en", "okay see you later", "greetings.bye");
  manager.addDocument("en", "bye for now", "greetings.bye");
  manager.addDocument("en", "i must go", "greetings.bye");
  manager.addDocument("en", "hello", "greetings.hello");
  manager.addDocument("en", "hi", "greetings.hello");
  manager.addDocument("en", "howdy", "greetings.hello");

  manager.addAnswer("en", "greetings.bye", "Till next time");
  manager.addAnswer("en", "greetings.bye", "see you soon!");
  manager.addAnswer("en", "greetings.hello", "Hey there!");
  manager.addAnswer("en", "greetings.hello", "Greetings!");
  return manager;
};
