# Re:Solve
Welcome to Re:Solve, a site dedicated to removing spaghetti code from the world, helping users learn and follow better code practices.

## Development Guidelines

### Git & Development management
Full-stack features are to be developed within their own branch.
Layout/Styling is to be worked on within the styling branch.
Deployments are to be done from the Main branch.
Small adjustments are to made within their own seperate branch.

### Tech Stack
**K**nex

**E**xpress

**R**eact

**N**ode

---

TailwindCSS + DaisyUI

Monaco-Editor/react [https://www.npmjs.com/package/@monaco-editor/react]

## MVP Statement
A platform that serves users with code solutions that are poorly written and non compliant with current coding standards, requirements or is using deprecated elements, with the challenge of refactoring these solutions, brining them in line with code compliance, requirements and modern technologies. 

## User Stories
As a user, I will be able to log in using Auth0.

As a user, I will be able to view a list of poor code solutions:
* Featuring a challenge name, which (if logged in) redirects to the challenge page to attempt it yourself
* A link to already submitted solutions
* A difficulty ranking/prompt
* A quality ranking

As a user, I will be able to attempt code challenges
* Featuring a brief, describing the environment/problem the provided challenge currently is solving
* Hints at potentially useful documentation or other directives describing the issues related to the challenge solution
* A snapshot/container of the challenge code that needs resolving.
* A prefilled sandbox (defaults to the challenge code) that can be written in, to refactor and write a solution. 
* A submit solution button to add your solution to the list of challenges.
* After submitting a solution, I will be redirected to the solutions page for the challenge I have attempted

As a user, I will be able to discuss solutions
* From the solutions page, there will be a discussion and comments section
* If I am logged in I will be able to add my comment to the discussion
* If I am logged in I will be able to reply to other user comments in the discussion

As a user, I will be able to view other users solutions
* Featuring a solution snapshot/container which shows the provided solution
* The solution snapshot will default to the users submission if they have submitted one, if not it will default to the highest rated solution.
* Featuring a list of submitted solutions
* Clicking on a listed solution with populate the snapshot/container with that solution
* List items will have a rating visible.

As a user, I will be able to rate solutions
* Featuring upvote/downvote buttons



## Stretch Goals & Opportunities

 Implementation of User Profile Pages

 Implementation of an AI Solver/Assistant

 Implementation of new Challenge Submissions
 
 Implementation of similar solution checker

## Setup

### Installation

#### **From the command line**

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

### **Initialising the Database**

```
npm run knex migrate:latest
npm run knex seed:run
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---
