"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with meetups
 */

const MeetUp = use("App/Models/MeetUp");
const Helpers = use("Helpers");

class MeetupController {
  /**
   * Show a list of all meetups.
   * GET meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new meetup.
   * GET meetups/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    const meetUpData = request.only(["title", "description", "localization"]);

    if (request.file("image")) {
      const image = request.file("image", {
        types: ["image"],
        size: "2mb"
      });

      await image.move(Helpers.tmpPath("uploads"), file => {
        name: `${new Date().getTime()}.${file.subtype}`;
      });

      if (!image.move()) {
        return image.error();
      } else {
        meetUpData.image_url = image.fileName;
      }
    }

    const meetUp = await MeetUp.create(meetUpData);

    return response.status(201).json(meetUp);
  }

  /**
   * Create/save a new meetup.
   * POST meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single meetup.
   * GET meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing meetup.
   * GET meetups/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update meetup details.
   * PUT or PATCH meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a meetup with id.
   * DELETE meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = MeetupController;
