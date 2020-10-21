import express from 'express'
import path from 'path'
require('dotenv').config()

const env = process.env
const axios = require('axios')
const port = 8080
const app = express()
const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_TOKEN = env.GITHUB_ACCESS_TOKEN
const github = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${GITHUB_TOKEN}`
  },
  responseType: 'json'
})

app.use(express.static('dist'))

// APIとして利用するパスは随時追加
// app.get('/api/doSomething', doSomething)

// TODO:APIでPRを取得する

app.get(/.*/, (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('dist/index.html'))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
