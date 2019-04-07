"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeetupsPreferencesSchema extends Schema {
  up() {
    this.create("meetups_preferences", table => {
      table.increments();
      table
        .integer("meetup_id")
        .unsigned()
        .references("id")
        .on("meetups");
      table
        .integer("preferences_id")
        .unsigned()
        .references("id")
        .on("preferences");
      table.timestamps();
    });
  }

  down() {
    this.drop("meetups_preferences");
  }
}

module.exports = MeetupsPreferencesSchema;
