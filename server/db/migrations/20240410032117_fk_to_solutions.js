/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table('solutions', function (table) {
    table.integer('challenge_id').notNullable()
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
  return knex.schema.table('solutions', function (table) {
    table.dropForeign('challenge_id')
    table.dropColumn('challenge_id')
  })
}
