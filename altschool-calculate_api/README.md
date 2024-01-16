![Altschool Logo](https://raw.githubusercontent.com/Oluwasetemi/altschool-opensource-names/d5d87d27629fdd83b4a1d601afee0248f69cb25e/AltSchool-dark.svg)

# Altschool Calculate API (Test Driven Development )

This is a project that was created during one of Altschool's live classes. The aim of the project was to learn how to build test driven APIs. We were given as an assignment to test all endpoints and fix a bug we encountered during development.

## About the API

This is a simple math API that performs basic arithmetic functions (addition, subtraction, multiplication, and division). It consists of only one route, but can identify the arithmetic operation the user wants to perform by getting the ```action``` sent by the user in the ```body```.

## Built With

- NodeJS

## Testing Tools

- Jest
- Super Test

## Usage

### Download repository and start server

Clone repository

```bash
git clone https://<token>@github.com/davidudo/altschool-calculate_api
```

Change directory

```bash
cd altschool-calculate_api
```

Install dependencies

```bash
npm install
```

Start server

```bash
npm run start:dev
```

### How to use API

As mentioned earlier, the API has only one route, what makes it able to know the arithmetic operation to carry out is determined by the value of the ```action``` key in the data object sent by the user. The following should be used in the request when testing the API:

- URL: ```http://localhost:3000/calculate```
- Method: ```POST```

#### Addition

Request

- Body type ```JSON```
- Body content
  ```javascript
  {
    "num1": 2,
    "num2": 2,
    "action": "sum"
  }
  ```
- Expected response
  ```javascript
  {
    "result": 4
  }
  ````

#### Subtraction

Request

- Body type ```JSON```
- Body content
  ```javascript
  {
    "num1": 2,
    "num2": 2,
    "action": "subtract"
  }
  ```
- Expected response
  ```javascript
  {
    "result": 0
  }
  ````

#### Multiplication

Request

- Body type ```JSON```
- Body content
  ```javascript
  {
    "num1": 2,
    "num2": 2,
    "action": "multiply"
  }
  ```
- Expected response
  ```javascript
  {
    "result": 4
  }
  ````

#### Division

Request

- Body type ```JSON```
- Body content
  ```javascript
  {
    "num1": 2,
    "num2": 2,
    "action": "divide"
  }
  ```
- Expected response
  ```javascript
  {
    "result": 1
  }
  ````
