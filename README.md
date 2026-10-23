# Random User Picker

A small JavaScript portfolio project by Jarrell Warren. This Express application fetches sample users from JSONPlaceholder, randomly selects three unique users, and displays them in alphabetical order.

## Features

- Select three sample users with one button
- Fisher–Yates shuffle for random selection
- Alphabetical sorting by name (A–Z)
- Loading and error messages
- Responsive page with names, email addresses, and companies

## Technologies

Node.js, Express, JavaScript, HTML, CSS, and node-fetch.

## Run locally

Install a supported Node.js LTS release, then run these commands from the project folder:

```sh
npm install
npm start
```

Open http://localhost:8080. Internet access is required to fetch the sample data. Set the PORT environment variable to use another port.

## Structure

- `server.js`: Express server, API request, random selection, and sorting
- `public/index.html`: interface and client-side request
- `package.json`: dependencies and start command

## API

`GET /random_users` returns an array of three randomly selected sample users, sorted by name. Upstream request failures return HTTP 500 with an error message.

## Project background

Adapted from a university JavaScript assignment. The portfolio version adds a standalone interface and setup documentation, removes automatic browser launching, and sorts names A–Z.

## Data source

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) supplies fictional user data. This project does not collect real user information.
