export default manager => {
  manager.addDocument("en", "how are you", "smalltalk.bye");

  manager.addAnswer("en", "smalltalk.bye", "Good! How about you?");
  return manager;
};
