/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('solutions', function (table) {
    table.integer('id').primary()
    table.datetime('date').notNullable()
    table.text('body').notNullable()
    table.integer('author_id').notNullable()
    table.integer('upvotes').defaultTo(0)
    table.integer('downvotes').defaultTo(0)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('solutions')
}
