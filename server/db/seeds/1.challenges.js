/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('challenges').del()
  await knex('challenges').insert([
    {
      id: 1,
      title: 'Addition',
      date: '2024-02-27 14:00:00',
      brief: 'A user was asked to write code to add two numbers together.',
      hints: 'none right now.',
      problem:
        'var a = 5\nvar b = 10\n\nfunction addition() {\n  let result = a + b\n  return result\n}',
      author_id: 1,
      upvotes: 3,
      downvotes: 0,
      difficulty: 'Easy',
    },
    {
      id: 2,
      title: 'Factorial',
      date: '2024-02-27 17:00:00',
      brief: 'This code calculates the factorial of a given number.',
      hints: 'It contains overly verbose and unnecessary comments.',
      problem:
        'function factorial(num) {\n  // Check if the number is 0 or 1\n  // If so, return 1 as factorial of 0 and 1 is 1\n  if (num === 0 || num === 1) {\n    return 1 // Return 1\n  }\n\n  // Initialize the result variable to 1\n  let result = 1 // This variable stores the result of the factorial\n\n  // Iterate from 2 to num (inclusive)\n  for (let i = 2; i <= num; i++) {\n    // Multiply the current value of result by i\n    // and assign it back to result\n    result *= i // Multiply the current result by the current value of i\n  }\n\n  // Return the final result\n  return result // Return the calculated factorial\n}\n\n// Example Usage:\nconsole.log(factorial(5)) // Output: 120 // Output the factorial of 5',
      author_id: 1,
      upvotes: 7,
      downvotes: 1,
      difficulty: 'Easy',
    },
    {
      id: 3,
      title: 'Foobar',
      date: '2024-03-07 10:00:00',
      brief:
        'An interviewer has asked for a candidate to write a solution to foobar in the most simple means, how can this be improved.',
      hints: 'None right now.',
      problem:
        "function foobarBad(num) {\n  if (num % 3 === 0 && num % 5 === 0) {\n    return 'foobar'\n  } else if (num % 3 === 0) {\n    return 'foo'\n  } else if (num % 5 === 0) {\n    return 'bar'\n  } else {\n    return ''\n  }\n}",
      author_id: 1,
      upvotes: 4,
      downvotes: 0,
      difficulty: 'Hard',
    },
    {
      id: 4,
      title: 'Preffered language',
      date: '2024-03-07 12:30:00',
      brief: 'The Developer is attempting to get a users preferred language.',
      hints: 'They are using a deprecated method.',
      problem:
        "// Function to get the user's preferred language\nfunction getPreferredLanguage(): string {\n  return navigator.language\n}\n\n// Main function\nfunction main() {\n  const preferredLanguage = getPreferredLanguage()\n  console.log('Preferred Language:', preferredLanguage)\n}\n\n// Call the main function\nmain()",
      author_id: 1,
      upvotes: 5,
      downvotes: 0,
      difficulty: 'Medium',
    },
  ])
}
