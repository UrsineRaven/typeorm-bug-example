const EntitySchema = require("typeorm").EntitySchema;
const Event = require("../model/Event").Event;

module.exports = new EntitySchema({
  name: "Event",
  target: Event,
  columns: {
    id: {
      primary: true,
      type: "int",
      unique: true
    },
    datetime: {
      type: "int"
    },
    description: {
      type: "varchar",
      length: 25
    },
    // typeId: {
    //   type: "int",
    //   nullable: true
    // }
  },
  relations: {
    type: {
      target: "EventType",
      type: "many-to-one",
      nullable: false
    }
  }
});