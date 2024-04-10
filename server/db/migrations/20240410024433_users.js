/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', function (table) {
    table.integer('id').primary()
    table.string('auth_id')
    table.string('name')
    table.integer('coolness')
    table.integer('spaghetness')
    table.string('favourite_duck')
    table.text('about')
    table.string('experience')
    table.string('profile_pic_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users')
}
