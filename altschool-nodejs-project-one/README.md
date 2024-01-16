![Altschool Logo](https://raw.githubusercontent.com/Oluwasetemi/altschool-opensource-names/d5d87d27629fdd83b4a1d601afee0248f69cb25e/AltSchool-dark.svg)

# Altschool Nodejs Project - One

After learning **Nodejs** in the second week of the second semester in Altschool, I started building this project in order to test what have learned so far.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [About project](#about-project)
  - [Usage](#usage)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The project

![Question Screenshot](./images/question-screenshot.jpg)

### About project

This is an API created with NodeJS. It can be classified into two main routes, the `users` routes and the `books` route. Each route contains the following methods:

- **Users** route:
  - createUser ```POST```
  - authenticateUser ```POST```
  - getAllUsers ```GET```
- **Books** route:
  - createBook ```POST```
  - deleteBook ```DELETE```
  - loanOutBooks ```POST```
  - returnBooks ```POST```
  - updateBook ```PUT```

Also, I built a basic frontend demo application that interacts with the API. 

**NOTE:** While building the frontend demo, I discovered that only `GET` and `POST` methods worked, so the functions that work with `PUT` and `DELETE` methods were not functional

## Usage

Clone repository 

```
git clone https://<insert_your_token>@github.com/davidudo/altschool-nodejs-project-one
```

Change directory

```
cd altschool-nodejs-project-one
```

Install dependencies

```
npm install
```

Start server

```
npm run start:dev
```
### Testing endpoints

| ENDPOINT           |METHODS | DESCRIPTION                 | SEND DATA      |
| ------------------ | ------ | --------------------------- | -------------- |
| /books             | GET    | Gets all books              | -              |
| /books             | POST   | Adds a book to database     | body `json`    |
| /books             | PUT    | Updates a book in database  | body `json`    |
| /books/:id         | DELETE | Deletes a book from db      | path params    |
| /books/loanout     | POST   | Loans multiple books        | body `json`    |
| /books/returnbooks | DELETE | Return books to database    | path params    |
| /users             | GET    | Gets all users fron db      | -              |
| /users             | POST   | Create new user             | body `json`    |
| /authenticateUser  | POST   | Authenticates user          | body `json`    |

## My process

The design process I used to create this API is very simple. First of all I had to write down the basic files and folders I will need and list the files that will be contained in each folder. While writing the code, there were three main stages in my design process which were: 

- Setup server with a request handler
- Add routes to request handler and test them
- Add functionality to each route

### Built with

- Nodejs
- HTML

### What I learned

- How to setup a simple server with NodeJS
- Basics of authentication
- Code documentation
- How to consume API from frontend
- How to build a CRUD app
- Basics of error handling
- How to categorise code files

### Continued development

In the next project, I will need to learn how to develop an API that can allow all methods from frontend applications. I want to discover why `Access-Control-Allow-Methods` did not work in my request handler when I sent a request from the frontend. Also in continued development, I will work on creating and effective authentication, book loaning and returning system.

### Useful resources

For the development of the frontend, I found this [resource](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) very useful. It helped me understand how to send requests to the backend using different methods and also how to receive data from it.

## Author

- Twitter - [@_davidudo](https://www.twitter.com/_davidudo)
- LinkedIn - [David Udo](https://www.linkedin.com/in/david-udo-1713b3231)
