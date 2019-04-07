"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Meetup extends Model {
  users() {
    return this.belongsToMany("App/Models/User").withTimestamps();
  }

  preferences() {
    return this.belongsToMany("App/Models/Preference").withTimestamps();
  }
}

module.exports = Meetup;
