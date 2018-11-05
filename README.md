# Blockhain RESTful web API
The project has been developed using [Node.js](https://nodejs.org/en/) and the [Express.js](https://expressjs.com/) framwork for the API endpoints.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the [Node.js web site](https://nodejs.org/en/).

### Setup

After you have Node and NPM installed you can clone this repo and simply run  
```
npm install
```
To start the server
```
node index.js
```

### Usage

This application supports GET `http://localhost:8000/block{BLOCK_NUMBER}` and POST `http://localhost:8000/block`  
GET example using CURL:
```
curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"test data"}'
```  

POST example using CURL
```
curl http://localhost:8000/block/0
```
