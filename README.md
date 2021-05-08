# Welcome to Craps Table Reloaded

## Table of Contents

---

1.[General Info](#general-info) 2.[Technologies](#technologies) 3.[Requirements](#requirements) 4.[Start App Locally](#start-app-locally) 5.[Start App on Heroku](#start-app-on-heroku) 6.[Game Instructions](#game-instructions) 7.[Suggested Extras](#suggested-extras) 8.[Personal Extras](#personal-extras) 9.[Disclaimer](#disclaimer)

### General Info

---

This app allows users to play dice. The user is able to input the quantity of players, the quantity of dice to be played and the number of faces for the dice.
The gameplay is a simple turned based game. Scores are kept in the scoreboard.

## Technologies

---

The coding language used for this project was JavaScript. React library was used to help manage states and be able to render multiple components dynamically. Mocha and chai were used to provide a testing envoirenment.

Hope you enjoy the app. This is my first one ever.

Developer contact information: klaushellemann@gmail.com

## Requirements

---

Install Node.js: [https://nodejs.org/](https://nodejs.org/)

## Start App Locally

---

This project is being stored on [https://github.com/klaushell/crapstablereloaded](https://github.com/klaushell/crapstablereloaded)
To start the app locally on your system, be sure to be running a scripting envoirenment, clone the repository and install the required dependencies.

$ git clone git@github.com:klaushell/crapstablereloaded.git
$ cd ../path/to/the/file
$ yarn install
$ yarn start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Start App on Heroku

---

Open your web browser and go to: [https://oh-crap.herokuapp.com/](https://oh-crap.herokuapp.com/)
If the page fails to start, wait for 5 minutes and reload page.

## Game Instructions

---

The main objective is to have fun. Remember that throughout the whole game.

Step 1: Enter the number of players that will be joining.
Step 2: Enter how many dice will each player be playing with.
Step 3: Enter the number of faces for all dice.
Step 4: Press "READY" when you are ready to start.
Step 5: First player presses "Roll" to roll the dice.
Step 6: Press "NEXT" to end turn.
Step 7: Next player presses "Roll"...
Step 8: Press "RESET" to reset the board to start the game again.

CONDITION APPLIED: The same dice will never repeat last roll.

## Suggested Extras

---

Added functionality to choose the amount of players.
Added functionaliyy to choose how many dice are in play.
Added functionaliyy to choose how many faces for all dice.

## Personal Extras

---

Added unitary testing to rolling function to assure that the last roll per dice was never repeated. Mocha and Chai were installed to provide an adequate testing environment and the propper dependencies were redirected in the package.json file.
To run, project dependencies should be installed first, otherwise:

$ yarn install

After succesfull installation run:

yarn test.

## Disclamer

---

This code was written with a lot of love and is open source, please use it at will. Enjoy!
