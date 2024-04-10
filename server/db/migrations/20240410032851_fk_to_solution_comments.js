/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table('solution_comments', function (table) {
    table.foreign('solution_id').references('solutions.id').onDelete('cascade')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table('solution_comments', function (table) {
    table.dropForeign('solution_id')
  })
}
