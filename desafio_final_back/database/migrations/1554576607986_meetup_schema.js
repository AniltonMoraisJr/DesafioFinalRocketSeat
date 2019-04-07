"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeetupSchema extends Schema {
  up() {
    this.create("meetups", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.string("image_url");
      table.string("localization");
      table.timestamps();
    });
  }

  down() {
    this.drop("meetups");
  }
}

module.exports = MeetupSchema;
