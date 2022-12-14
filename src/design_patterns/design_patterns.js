/**
 * @class PubSub
 * @description A simple pub/sub class
 * @example const pubsub = new PubSub();
 */
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    // TODO: add the callback to the subscribers
  }

  publish(event, data) {
    // TODO: call the callback with the data
  }
}

/**
 * @class Singleton
 * @description A simple singleton class
 * @example const singleton = new Singleton();
 */
class Singleton {
  constructor() {
    // TODO: return the same instance
  }
}

module.exports = {
  Singleton,
  PubSub,
};
