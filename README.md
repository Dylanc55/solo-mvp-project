# solo-mvp-project

### Table of contents

- Introduction
- Technologies
- Setup
- Sources

### Introduction

This is a single-page app where families can save their old recipes which have seen better days.
Families don't have to read those frayed, old and almost illegible family recipes.

### Technologies

- React
- Knex
- PostgreSQL
- Heroku

### Prerequisites

To enter recipes into a database, you need to prepare a postgresql database named "recipe"

It is recommended to provide a .env file with a DATABASE_URL variable. A database connection is required to make use of the knexfile.js, which is used for storing and retrieving recipes.

### Setup

To run this project, install it locally using yarn:

```
$ yarn install
```

To run migrations:

```bash
$ yarn migrate
```

To create a full build:

```bash
$ yarn build
```

To run the server:

```bash
$ yarn serve:
```

To run tests (not yet implemented):

```bash
$ yarn test
```

### Access

To access this application locally using yarn:

```
$ yarn start
```

In your local browser of choice, open http://localhost:3000/ to open the application.


### Sources

"This was created during my time as a student at Code Chrysalis."