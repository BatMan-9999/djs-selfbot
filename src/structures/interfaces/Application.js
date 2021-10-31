'use strict';

const Base = require('../Base');

/**
 * Represents an OAuth2 Application.
 * @abstract
 */

/* eslint-disable no-useless-constructor */

class Application extends Base {
  constructor(client) {
    super(client);
  }

  _patch() {
    // /**
    //  * The application's id
    //  * @type {Snowflake}
    //  */
    // this.id = data.id;
    // /**
    //  * The name of the application
    //  * @type {?string}
    //  */
    // this.name = data.name ?? this.name ?? null;
    // /**
    //  * The application's description
    //  * @type {?string}
    //  */
    // this.description = data.description ?? this.description ?? null;
    // /**
    //  * The application's icon hash
    //  * @type {?string}
    //  */
    // this.icon = data.icon ?? this.icon ?? null;
  }

  /**
   * The timestamp the application was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return 0;
  }

  /**
   * The time the application was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(0);
    // Return new Date(this.createdTimestamp);
  }

  /**
   * A link to the application's icon.
   * @param {StaticImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  iconURL() {
    return 'https://cdn.discordapp.com/embed/avatars/0.png';
    // If (!this.icon) return null;
    // return this.client.rest.cdn.AppIcon(this.id, this.icon, { format, size });
  }

  /**
   * A link to this application's cover image.
   * @param {StaticImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  coverURL() {
    return 'https://cdn.discordapp.com/embed/avatars/0.png';
    // If (!this.cover) return null;
    // return Endpoints.CDN(this.client.options.http.cdn).AppIcon(this.id, this.cover, { format, size });
  }

  /**
   * Asset data.
   * @typedef {Object} ApplicationAsset
   * @property {Snowflake} id The asset's id
   * @property {string} name The asset's name
   * @property {string} type The asset's type
   */

  /**
   * Gets the application's rich presence assets.
   * @returns {Promise<Array<ApplicationAsset>>}
   */
  fetchAssets() {
    return [];
    // Const assets = await this.client.api.oauth2.applications(this.id).assets.get();
    // return assets.map(a => ({
    //   id: a.id,
    //   name: a.name,
    //   type: AssetTypes[a.type - 1],
    // }));
  }

  /**
   * When concatenated with a string, this automatically returns the application's name instead of the
   * Oauth2Application object.
   * @returns {?string}
   * @example
   * // Logs: Application name: My App
   * console.log(`Application name: ${application}`);
   */
  toString() {
    return 'Application';
    // Return this.name;
  }

  toJSON() {
    return {};
    // Return super.toJSON({ createdTimestamp: true });
  }
}

module.exports = Application;
