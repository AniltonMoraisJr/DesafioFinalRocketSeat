"use strict";

/*
|--------------------------------------------------------------------------
| PreferenceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use("Factory");
const Preference = use("App/Models/Preference");

class PreferenceSeeder {
  async run() {
    const preferences = await Preference.truncate();

    const preference1 = new Preference();
    preference1.name = "Front-end";
    await preference1.save();

    const preference2 = new Preference();
    preference2.name = "Back-end";
    await preference2.save();

    const preference3 = new Preference();
    preference3.name = "Mobile";
    await preference3.save();

    const preference4 = new Preference();
    preference4.name = "DevOps";
    await preference4.save();

    const preference5 = new Preference();
    preference5.name = "Gestão";
    await preference5.save();

    const preference6 = new Preference();
    preference6.name = "Marketing";
    await preference6.save();
  }
}

module.exports = PreferenceSeeder;
