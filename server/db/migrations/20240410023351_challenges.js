/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('challenges', function (table) {
    table.integer('id').primary()
    table.varchar('title')
    table.datetime('date')
    table.text('brief')
    table.text('hints')
    table.text('problem')
    table.integer('author_id')
    table.integer('upvotes').defaultTo(0)
    table.integer('downvotes').defaultTo(0)
    table.string('difficulty')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('challenges')
}
