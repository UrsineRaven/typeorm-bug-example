class Event {
  constructor(id, datetime, type, description) {
    this.id = id;
    this.datetime = datetime;
    this.type = type;
    this.description = description;
  }
}
  
module.exports = {
  Event: Event
};