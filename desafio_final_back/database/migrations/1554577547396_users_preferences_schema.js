"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsersPreferencesSchema extends Schema {
  up() {
    this.create("users_preferences", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .on("users");
      table
        .integer("preferences_id")
        .unsigned()
        .references("id")
        .on("preferences");
      table.timestamps();
    });
  }

  down() {
    this.drop("users_preferences");
  }
}

module.exports = UsersPreferencesSchema;
