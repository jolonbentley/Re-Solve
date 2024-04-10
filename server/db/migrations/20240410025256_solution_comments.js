/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('solution_comments', function (table) {
    table.integer('id').primary()
    table.integer('solution_id')
    table.integer('author_id')
    table.string('comment')
    table.datetime('date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('solution_comments')
}
