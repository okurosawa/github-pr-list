import express from 'express'
import path from 'path'
import config from 'config'

const port = 8080
const app = express()
app.use(express.static('dist'))

// APIとして利用するパスは随時追加
// app.get('/api/doSomething', doSomething)

app.get(/.*/, (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('dist/index.html'))
})
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
