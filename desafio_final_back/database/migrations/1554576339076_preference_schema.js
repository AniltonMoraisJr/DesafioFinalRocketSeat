"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PreferenceSchema extends Schema {
  up() {
    this.create("preferences", table => {
      table.increments();
      table
        .string("name")
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("preferences");
  }
}

module.exports = PreferenceSchema;
