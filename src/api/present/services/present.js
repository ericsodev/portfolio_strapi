'use strict';

/**
 * present service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::present.present');
