/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id')
    table.string('type')
    table.string('timeCat')
    table.string('name')
    table.string('timeEst')
    table.string('description')
    table.string('link')
    table.integer('score')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('activities')
}
