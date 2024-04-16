/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_challenge_votes').del()
  await knex('user_challenge_votes').insert([
    {
      user_id: 2,
      challenge_id: 1,
      vote: 1,
    },
  ])
}
