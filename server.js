// Express
const express = require('express')
const app = express()
const port = 3000

// Mysql
const db = require('./database');

// Url Endcoded
app.use(express.urlencoded({extended: true}))

// Cors
const cors = require('cors');

// Allow Cors
app.use(cors())


// Boot Server
app.listen(port, () => {
  console.log(`Server Berjalan di http://localhost:${port}`)
})
