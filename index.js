const express = require('express')
const app = express()
const parser = require('body-parser')
const Block = require('./block')
const Blockchain = require('./simpleChain')
const blockchain = new Blockchain();


app.listen(8000, () => console.log('API listening on port 8000'))
app.use(parser.json())
app.get('/', (req, res) => res.status(404).json({
  "status": 404,
  "message": "Invalid endpoint. Available endpoints are POST /block or GET /block/{BLOCK_NUMBER}"
}))

/**
 * GET Block endpoint using URL path with block number parameter.
 * URL path http://localhost:8000/block/{BLOCK_NUMBER}
 */
app.get('/block/:height', async (req, res) => {
  try {
    const response = await blockchain.getBlock(req.params.height)
    res.send(response)
  } catch (error) {
    res.status(404).json({
      "status": 404,
      "message": "Block not found"
    })
  }
})

/**
 * POST Block endpoint using key/value pair within request body.
 * URL path http://localhost:8000/block
 */
app.post('/block', async (req, res) => {
  if (req.body.body === '' || req.body.body === undefined) {
    res.status(400).json({
      "status": 400,
      message: "Fill the body parameter"
    })
  }

  await blockchain.addBlock(new Block(req.body.body))
  const height = await blockchain.getBlockHeight()
  const response = await blockchain.getBlock(height)

  res.status(201).send(response)
})
