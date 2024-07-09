# Project Title

## Overview

This is a site that gives game recommendations and keeps track of games they've played and games
they would like to play.

### Problem

With so many games to choose from these days, it can be time consuming finding a new game to you would like to play. This site makes it quick and
easy to find game recommendations based on what you enjoy. 

### User Profile

- Gamers:
    - looking for a new game to play
    - want to keep track of games they've played
    - want to keep tracks of games they would like to play

### Features

- As a user, I want to be able to see the most popular games lately.
- As a user, I want game recommendations based on games i enjoy.

- As a user, I want to be able to create an account to track games.
- As a user, I want to be able to login to my account to manage my game lists.

- As a logged in user, I want to be able to keep track of games i've played before.
- As a logged in user, I want to be able to add new games to a (would-like-to-play) list.
    

## Implementation

### Tech Stack

- React
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express

### APIs

Game APIs with a list of games
    - IGDB api

### Sitemap

Home Page
    - will prompt user to enter games they enjoy
    - 3 bars in the middle to enter the games
    - under the form, there'll be a currently popular games section
    - users will also be able to just search for any game theyd like

Game Search Page
    - Users can search for any game theyd like using the search bar.
    - clicking on the title will bring them to the game description page

Game Description Page
    - shows the game description, provides in-game pictures.
    - will be able to add the game to your already played list or would like to play list.

Game Recommendation Page
    - appears after user inputs their favourite games
    - spits out a list of game recommendations

Account Signup Page
    - page to create a new profile

Account Login Page
    - page to login to an existing profile

Profile
    - shows 2 lists, games the user has played and games the user would like to play
    - will be able to delete 

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

- GameList
    - id - int
    - title - string
    - company - string
    - genres - list

- user
    - username - string
    - password - string
    - playedGames - list
    - futureGames - list


### Endpoints

**GET /gamelist**

- gets list of games

Parameters: none;

RESPONSE:
[
    {
        "id": 1,
        "title": Super Mario Bros,
        "publisher": Nintendo,
        "genre": Platformer
    }
]

**GET /gamelist/:id**

- Gets information of the game

Parameters: 
- id or game title

RESPONSE:
[
    {
        "id": 1,
        "title": Super Mario Bros,
        "publisher": Nintendo,
        "genre": Platformer,
        "description": "It stars Mario and Luigi, two Italian plumbers"
    }
]

**GET /profile/:profileId**

- Gets profile of logged in user

Parameters:
    - profile id

RESPONSE:
    {
        username: eosoo,
        password: 123,
        name: Eo Soo Kim,
        playedGames: ["Super Mario Bros", "Legend of Zelda", "League of Legends", "Balatro"],
        futureGames: []
    }

**POST /profile/:profileId**

- updates the game lists of a profile.

parameters:
    - profile id
    - profile game lists

RESPONSE:
    {
        username: eosoo,
        password: 123,
        name: Eo Soo Kim,
        playedGames: ["Super Mario Bros", "Legend of Zelda", "League of Legends", "Balatro"],
        futureGames: ["Elden Ring"]
    }

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

There is currently no auth in the project

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

- Feature: Account Signup/Login
    - add account signup
    - user will be able to login to that profile

- Feature: Add games to account
    - add functionality to add games to played list
    - add functionality to add games to would like to play list

- Feature: Add popular game section to Home Page
    - add component to home page that shows popular games.

- Bug Fixes

- Demo Day

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- Add a button for users to expand the recommendation page.

- Allow users to search popular games of a certain genre when clicking on a genre tag.

- Allow users to move games from their wishlist to games they've played.

- Track when the game was added or users can edit what year they had played that game.
    - sort lists by year
