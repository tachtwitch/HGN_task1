# Number Classifier API
=========================

A RESTful API that classifies numbers into different categories such as prime, perfect, armstrong, even, odd, and provides a fun fact about the number.

## Features
-----------

* Classify numbers into prime, perfect, armstrong, even, odd
* Provide a fun fact about the number
* Handle invalid input and errors

## API Endpoints
-----------------

### GET /api/classify-number

* Classify a number and provide a fun fact
* Request Parameters:
	+ `number`: The number to classify (required)
* Response:
	+ JSON object containing the classification and fun fact

## Example Use Cases
---------------------

### Classify the number 10

* `GET /api/classify-number?number=10`

### Classify the number 25

* `GET /api/classify-number?number=25`

## Installation
---------------

### Clone the repository

* `git clone https://github.com/your-username/number-classifier-api.git`

### Install dependencies

* `npm install`

### Start the server

* `npm start`

## Technologies Used
----------------------

* Node.js
* Express.js
* Axios

## Contributing
--------------

### Fork the repository

* `git fork https://github.com/your-username/number-classifier-api.git`

### Create a new branch

* `git checkout -b your-branch-name`

### Make changes and commit

* `git commit -m "Your commit message"`

### Push changes

* `git push origin your-branch-name`

### Open a pull request

## License
-------

* MIT License

## Author
------

* Tachtwitch
