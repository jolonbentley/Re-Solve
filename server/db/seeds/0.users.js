/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth_id: 'auth7543628',
      name: 'Steve',
      coolness: 10,
      spaghetness: 10,
      favourite_duck: 'Mallard',
      about: 'A simple code kind of guy',
      experience: 'Graduate software developer',
      profile_pic_url:
        'https://assets.coingecko.com/coins/images/34120/large/Phteve.jpeg?1704046341',
    },
  ])
}
