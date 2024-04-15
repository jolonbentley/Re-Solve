/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('challenge_comments', function (table) {
    table.integer('id').primary()
    table.integer('challenge_id')
    table.integer('author_id')
    table.string('comment')
    table.datetime('date').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('challenge_comments')
}
