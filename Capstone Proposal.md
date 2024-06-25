# Project Title

## Overview

What is your app? Brief description in a couple of sentences.

The site will give the user a game recommendation based on their favourite games. The 
user will enter in 3(?) of their favourite games or games they want a new game of the same
genre/style and receive a list back of game recommendations

### Problem

Why is your app needed? Background information around any pain points or other reasons.

As a gamer myself, I sometimes find times where I don't know what to play or there are
times where im looking for games to play with friends. Generally its hard to find a good
game recommendation as you can't really search for one on google, unless you know the 
game already.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

People who are looking for their next game to play solo or with their friends.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

My app will take in a few game titles and return game titles back (maybe with their 
metascore or a description).
    

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- TypeScript
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

List any external sources of data that will be used in your app.

Game APIs with a list of games
    - IGDB api
    - GiantBomb

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Home Page
    - will prompt user to enter games they enjoy
    - 3 bars in the middle to enter the games

Game Recommendation Page
    - appears after user inputs their favourite games
    - spits out a list of game recommendations

Game Description
    - might just be a small window that pops up to show the game description/info
    

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

- GameList
    - id - int
    - title - string
    - company - string
    - genres - list
    - score - int


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**GET /gamelist**

- get list of games

Parameters: none;

RESPONSE:
[
    {
        "id": 1,
        "title": Super Mario Bros,
        "publisher": Nintendo,
        "rating/Metascore": 99,
        "genre": Platformer
    }
]

**GET /gamelist/:id**

- Get information of game

Parameters: 
- id or game title

RESPONSE:
[
    {
        "id": 1,
        "title": Super Mario Bros,
        "publisher": Nintendo,
        "rating/Metascore": 99,
        "genre": Platformer,
        "description": "It stars Mario and Luigi, two Italian plumbers"
    }
]


### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

Auth will be added if there is extra time to add account feature.

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Gather game list data.

- Deploy client and server projects so all commits will be reflected in production

- Feature: Form to get games from user
    - implement an input on the home page to get favourite games
    - Create get /gamelist endpoint

- Feature: Game input drop down menu
    - when user is typing out the game, should see drop down options for game titles that users can click on.

- Feature: Game recommendations
    - after games are given and user presses enter, a list of game recommendations will be given
    - create get /gamelist/:id endpoint

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- if possible, also add a section for more recently released games that the user might enjoy (not just highest rated games of the genres)

- account feature - users can create an account to track what games they've player and their own rating of the game.