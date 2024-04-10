/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table('challenge_comments', function (table) {
    table
      .foreign('challenge_id')
      .references('challenges.id')
      .onDelete('cascade')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.table('challenge_comments', function (table) {
    table.dropForeign('challenge_id')
  })
}
