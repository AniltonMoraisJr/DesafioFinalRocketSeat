"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsersMeetupsSchema extends Schema {
  up() {
    this.create("users_meetups", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .on("users");
      table
        .integer("meetup_id")
        .unsigned()
        .references("id")
        .on("meetups");
      table.timestamps();
    });
  }

  down() {
    this.drop("users_meetups");
  }
}

module.exports = UsersMeetupsSchema;
