"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Preference extends Model {
  users() {
    return this.belongsToMany("App/Models/User").withTimestamps();
  }

  meetups() {
    return this.belongsToMany("App/Models/Meetup").withTimestamps();
  }
}

module.exports = Preference;
